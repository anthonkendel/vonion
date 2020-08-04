<template>
  <o-element>
    <o-input :id="id" class="date" v-model="vModel" v-on="listeners">
      <slot name="default" />
    </o-input>

    <transition name="ease">
      <div v-if="isOpen" class="calendar">
        <span class="heading">{{ month }} {{ year }}</span>

        <div class="days">
          <button
            class="day"
            v-for="dateTime in dateTimes"
            @click="onClickDay(dateTime)"
            :class="{ today: isToday(dateTime), outside: isOutsideMonth(dateTime, calendarValue) }"
            :key="dateTime.toString()"
          >
            <div>{{ dateTime.day }}</div>
            <small>{{ getDayName(dateTime) }}</small>
          </button>
        </div>
      </div>
    </transition>
  </o-element>
</template>

<script lang="ts">
import { OElement } from '../element';
import { DateTime } from 'luxon';
import { OInput } from '../input';
import Vue from 'vue';

export default Vue.extend({
  name: 'ODatepicker',
  model: {
    prop: 'vModelValue',
    event: 'change',
  },
  components: {
    OElement,
    OInput,
  },
  props: {
    id: String,
    vModelValue: String,
  },
  watch: {},
  data() {
    return {
      options: {
        zone: 'Europe/Stockholm',
        locale: 'sv',
      },

      currentValue: this.vModelValue,
      parsedValue: undefined as DateTime | undefined,
      calendarValue: undefined as DateTime | undefined,

      isValid: true,
      isOpen: false,
    };
  },
  created(): void {
    this.emitFormattedValue();
  },
  methods: {
    /**
     * Listeners
     */
    onBlur(): void {
      this.emitFormattedValue();
    },
    onClick(): void {
      this.isOpen = !this.isOpen;
      this.calendarValue = this.parsedValue;
    },
    onClickDay(dateTime: DateTime): void {
      const clicked = dateTime.toLocaleString();
      if (clicked) {
        this.isOpen = false;

        this.currentValue = clicked;
        this.emitFormattedValue();
      }
    },
    onKeyUp(event: KeyboardEvent): void {
      switch (event.code) {
        case 'Enter':
          this.onClick();
          break;
        case 'Escape':
          this.isOpen = false;
          break;
        default:
          break;
      }
    },
    /**
     * Updates
     */
    updateParsedValue(): void {
      if (this.isValidDate(this.currentValue)) this.parsedValue = DateTime.fromISO(this.currentValue, this.options);
    },
    updateCalendarValue(): void {
      if (this.isValidDate(this.currentValue)) this.calendarValue = DateTime.fromISO(this.currentValue, this.options);
    },
    emitFormattedValue(): void {
      const formattedDate = this.formatDate(this.currentValue);
      this.currentValue = formattedDate ?? this.currentValue;

      this.updateParsedValue();
      this.updateCalendarValue();

      this.$emit('change', this.currentValue);
    },
    /**
     * Formatting
     */
    formatDate(value: string): string | undefined {
      if (this.isValidDate(value)) {
        const dateTime = DateTime.fromISO(value, this.options);

        return dateTime.toLocaleString() ?? undefined;
      }
      return undefined;
    },
    getDayName(dateTime: DateTime): string {
      if (dateTime) {
        return dateTime.toFormat('ccc');
      }
      return 'Unknown';
    },
    /**
     * Validation
     */
    isValidDate(value: unknown): boolean {
      if (typeof value === 'string') {
        return DateTime.fromISO(value, this.options).isValid;
      }
      return false;
    },
    isToday(dateTime: DateTime): boolean {
      const today = DateTime.local();
      return dateTime.hasSame(today, 'day');
    },
    isOutsideMonth(dateTime: DateTime, currentDateTime: DateTime): boolean {
      if (this.calendarValue) {
        return (
          dateTime.startOf('month') < currentDateTime.startOf('month') ||
          dateTime.endOf('month') > currentDateTime.endOf('month')
        );
      }
      return false;
    },
  },
  computed: {
    year(): number | undefined {
      return this.calendarValue?.year ?? undefined;
    },
    month(): string | undefined {
      return this.calendarValue?.monthLong ?? undefined;
    },
    dateTimes(): DateTime[] {
      const dateTimes = [];
      const daysInMonth = this.calendarValue?.daysInMonth ?? 0;

      /**
       * Previous month
       */
      const startOfMonth = this.calendarValue?.startOf('month');
      const firstDayOfCurrentMonth = Number(startOfMonth?.toFormat('c'));
      const startOfWeek = startOfMonth?.minus({ days: firstDayOfCurrentMonth - 1 });
      let nextDay = startOfWeek;

      for (let before = 0; before < firstDayOfCurrentMonth - 1; before++) {
        if (nextDay) {
          dateTimes.push(nextDay);
          nextDay = nextDay.plus({ days: 1 });
        }
      }
      /**
       * Current month
       */
      for (let day = 1; day <= daysInMonth; day++) {
        const date = this.calendarValue?.set({ day });
        if (date) dateTimes.push(date);
      }

      /**
       * Next month
       */
      const endOfMonth = this.calendarValue?.endOf('month');
      const lastDayOfCurrentMonth = Number(endOfMonth?.toFormat('c'));
      const endOfWeek = endOfMonth?.plus({ days: 1 });
      nextDay = endOfWeek;

      for (let after = 0; after < 7 - lastDayOfCurrentMonth; after++) {
        if (nextDay) {
          dateTimes.push(nextDay);
          nextDay = nextDay.plus({ days: 1 });
        }
      }

      return dateTimes;
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        blur: this.onBlur,
        click: this.onClick,
        keyup: this.onKeyUp,
        change: () => undefined,
      };
    },
    vModel: {
      get(): unknown {
        return this.currentValue ?? '';
      },
      set(value: string): void {
        this.currentValue = value ?? '';
        this.isValid = this.isValidDate(this.currentValue);

        this.updateParsedValue();

        this.$emit('change', this.currentValue);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

$day-size: 2.5rem;
$day-padding: $day-size / 10;

.ease-enter-active,
.ease-leave-active {
  transition: all 0.2s ease-in;
}
.ease-enter,
.ease-leave-to {
  opacity: 0;
}

.date {
  margin-bottom: 0;
}

.calendar {
  margin: 0 0.2rem 0.8rem;

  .heading {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0.5rem 0rem;
  }

  .days {
    display: flex;
    flex-wrap: wrap;
    max-width: 8 * $day-size;
    padding-top: 0.2rem;

    .day {
      background-color: transparent;
      border-radius: 4px;
      border: 2px solid $black-garlic;
      height: $day-size;
      margin: 2px;
      padding: $day-padding;
      text-align: center;
      width: $day-size;

      &.today {
        background-color: $chive;
      }

      &.outside {
        border: 2px solid lighten($black-garlic, 30%);
        background-color: lighten($black-garlic, 70%);
        color: lighten($black-garlic, 30%);
      }

      &:focus {
        outline-offset: 0;
        outline: 3px solid $yellow-onion;
      }
    }
  }
}
</style>
