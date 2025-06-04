import { TimeAgoPipe } from "./time-ago.pipe";

describe("TimeAgoPipe", () => {
  let pipe: TimeAgoPipe;
  let nowDate: Date;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
    nowDate = new Date(2023, 0, 1, 12, 0, 0); // Jan 1, 2023, 12:00:00

    jasmine.clock().install();
    jasmine.clock().mockDate(nowDate);
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("should return empty string for null/undefined/empty inputs", () => {
    expect(pipe.transform(null)).toBe("");
    expect(pipe.transform(undefined)).toBe("");
    expect(pipe.transform("")).toBe("");
  });

  it("should return original value for invalid date strings", () => {
    expect(pipe.transform("not-a-date")).toBe("not-a-date");
  });

  it("should return empty string for future dates", () => {
    const futureDate = new Date(nowDate.getTime() + 60 * 1000);
    expect(pipe.transform(futureDate)).toBe("");
  });

  it("should handle different input types", () => {
    const testDate = new Date(nowDate.getTime() - 60 * 1000); // 1 minute ago

    expect(pipe.transform(testDate)).toBe("1 minute ago");

    expect(pipe.transform(testDate.getTime())).toBe("1 minute ago");

    expect(pipe.transform(testDate.toISOString())).toBe("1 minute ago");
  });

  it("should display time in seconds", () => {
    expect(pipe.transform(new Date(nowDate.getTime() - 20 * 1000))).toBe(
      "a few seconds ago"
    );
    expect(pipe.transform(new Date(nowDate.getTime() - 45 * 1000))).toBe(
      "45 seconds ago"
    );
  });

  it("should display time in minutes", () => {
    expect(pipe.transform(new Date(nowDate.getTime() - 60 * 1000))).toBe(
      "1 minute ago"
    );
    expect(pipe.transform(new Date(nowDate.getTime() - 5 * 60 * 1000))).toBe(
      "5 minutes ago"
    );
  });

  it("should display time in hours", () => {
    expect(pipe.transform(new Date(nowDate.getTime() - 60 * 60 * 1000))).toBe(
      "1 hour ago"
    );
    expect(
      pipe.transform(new Date(nowDate.getTime() - 5 * 60 * 60 * 1000))
    ).toBe("5 hours ago");
  });

  it("should display time in days", () => {
    expect(
      pipe.transform(new Date(nowDate.getTime() - 24 * 60 * 60 * 1000))
    ).toBe("1 day ago");
    expect(
      pipe.transform(new Date(nowDate.getTime() - 5 * 24 * 60 * 60 * 1000))
    ).toBe("5 days ago");
  });

  it("should display time in weeks", () => {
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    expect(pipe.transform(new Date(nowDate.getTime() - oneWeekMs))).toBe(
      "1 week ago"
    );
    expect(pipe.transform(new Date(nowDate.getTime() - 3 * oneWeekMs))).toBe(
      "3 weeks ago"
    );
  });

  it("should display time in months", () => {
    const oneMonthMs = 30.4375 * 24 * 60 * 60 * 1000;
    expect(pipe.transform(new Date(nowDate.getTime() - oneMonthMs))).toBe(
      "1 month ago"
    );
    expect(pipe.transform(new Date(nowDate.getTime() - 6 * oneMonthMs))).toBe(
      "6 months ago"
    );
  });

  it("should display time in years", () => {
    const oneYearMs = 365.25 * 24 * 60 * 60 * 1000;
    expect(pipe.transform(new Date(nowDate.getTime() - oneYearMs))).toBe(
      "1 year ago"
    );
    expect(pipe.transform(new Date(nowDate.getTime() - 3 * oneYearMs))).toBe(
      "3 years ago"
    );
  });
});
