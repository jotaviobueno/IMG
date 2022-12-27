export default function DateFormatHelper(date) {
    const Date = date.split("T");

    return `${Date[0]}T00:00:00.000Z`;
}