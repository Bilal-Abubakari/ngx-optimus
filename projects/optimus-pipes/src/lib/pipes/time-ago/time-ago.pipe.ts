import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeAgo",
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string | Date | number | null | undefined): string {
    if (value === null || value === undefined || value === "") {
      return "";
    }

    let date: Date;
    if (value instanceof Date) {
      date = value;
    } else if (typeof value === "number") {
      date = new Date(value);
    } else {
      date = new Date(value);
    }

    if (isNaN(date.getTime())) {
      console.warn(`TimeAgoPipe: Invalid date value provided: ${value}`);
      return String(value);
    }

    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 0) {
      return "";
    }

    if (seconds < 30) {
      return "a few seconds ago";
    }
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) {
      return "1 minute ago";
    }
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours === 1) {
      return "1 hour ago";
    }
    if (hours < 24) {
      return `${hours} hours ago`;
    }

    const days = Math.floor(hours / 24);
    if (days === 1) {
      return "1 day ago";
    }

    const AVG_DAYS_IN_WEEK = 7;
    const AVG_DAYS_IN_MONTH = 28;
    const AVG_DAYS_IN_YEAR = 365;

    if (days < AVG_DAYS_IN_WEEK) {
      return `${days} days ago`;
    }

    if (days < AVG_DAYS_IN_MONTH) {
      const weeks = Math.floor(days / AVG_DAYS_IN_WEEK);
      return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
    }

    if (days < AVG_DAYS_IN_YEAR) {
      const months = Math.floor(days / AVG_DAYS_IN_MONTH);
      return `${months} month${months === 1 ? "" : "s"} ago`;
    }

    const years = Math.floor(days / AVG_DAYS_IN_YEAR);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}
