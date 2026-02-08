// Swedish Clock System Data
export interface ClockTime {
    hour: number;
    minute: number;
    swedish: string;
    english: string;
    explanation: string;
    category: 'exact' | 'quarter' | 'half' | 'before' | 'after';
}

export const clockExplanations = [
    {
        title: "Hela timmar (Whole Hours)",
        description: "For exact hours, use 'klockan' + number",
        examples: [
            { time: "12:00", swedish: "klockan tolv", english: "twelve o'clock" },
            { time: "3:00", swedish: "klockan tre", english: "three o'clock" },
            { time: "7:00", swedish: "klockan sju", english: "seven o'clock" }
        ]
    },
    {
        title: "Kvart (Quarter)",
        description: "Use 'kvart över' (quarter past) or 'kvart i' (quarter to)",
        examples: [
            { time: "3:15", swedish: "kvart över tre", english: "quarter past three" },
            { time: "8:45", swedish: "kvart i nio", english: "quarter to nine" },
            { time: "11:15", swedish: "kvart över elva", english: "quarter past eleven" }
        ]
    },
    {
        title: "Halv (Half)",
        description: "Swedish uses 'halv' + NEXT hour (not the current hour!)",
        examples: [
            { time: "2:30", swedish: "halv tre", english: "half past two (literally: half three)" },
            { time: "6:30", swedish: "halv sju", english: "half past six (literally: half seven)" },
            { time: "11:30", swedish: "halv tolv", english: "half past eleven (literally: half twelve)" }
        ],
        warning: "⚠️ Important: 'halv tre' means 2:30, NOT 3:30!"
    },
    {
        title: "Över (Past)",
        description: "Use 'X minuter över' for minutes past the hour",
        examples: [
            { time: "4:05", swedish: "fem över fyra", english: "five past four" },
            { time: "9:10", swedish: "tio över nio", english: "ten past nine" },
            { time: "1:20", swedish: "tjugo över ett", english: "twenty past one" }
        ]
    },
    {
        title: "I (To)",
        description: "Use 'X minuter i' for minutes to the next hour",
        examples: [
            { time: "5:55", swedish: "fem i sex", english: "five to six" },
            { time: "7:50", swedish: "tio i åtta", english: "ten to eight" },
            { time: "10:40", swedish: "tjugo i elva", english: "twenty to eleven" }
        ]
    },
    {
        title: "Fem i halv (Five to half)",
        description: "25 minutes past the hour - 5 minutes before 'halv'",
        examples: [
            { time: "1:25", swedish: "fem i halv två", english: "five to half two (25 past one)" },
            { time: "4:25", swedish: "fem i halv fem", english: "five to half five (25 past four)" },
            { time: "9:25", swedish: "fem i halv tio", english: "five to half ten (25 past nine)" }
        ]
    },
    {
        title: "Fem över halv (Five past half)",
        description: "35 minutes past the hour - 5 minutes after 'halv'",
        examples: [
            { time: "2:35", swedish: "fem över halv tre", english: "five past half three (35 past two)" },
            { time: "6:35", swedish: "fem över halv sju", english: "five past half seven (35 past six)" },
            { time: "11:35", swedish: "fem över halv tolv", english: "five past half twelve (35 past eleven)" }
        ]
    }
];

export const clockTimes: ClockTime[] = [
    // Exact hours
    { hour: 1, minute: 0, swedish: "klockan ett", english: "one o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 2, minute: 0, swedish: "klockan två", english: "two o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 3, minute: 0, swedish: "klockan tre", english: "three o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 4, minute: 0, swedish: "klockan fyra", english: "four o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 5, minute: 0, swedish: "klockan fem", english: "five o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 6, minute: 0, swedish: "klockan sex", english: "six o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 7, minute: 0, swedish: "klockan sju", english: "seven o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 8, minute: 0, swedish: "klockan åtta", english: "eight o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 9, minute: 0, swedish: "klockan nio", english: "nine o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 10, minute: 0, swedish: "klockan tio", english: "ten o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 11, minute: 0, swedish: "klockan elva", english: "eleven o'clock", explanation: "Exact hour", category: 'exact' },
    { hour: 12, minute: 0, swedish: "klockan tolv", english: "twelve o'clock", explanation: "Exact hour", category: 'exact' },

    // Quarter past (all hours)
    { hour: 1, minute: 15, swedish: "kvart över ett", english: "quarter past one", explanation: "15 minutes past", category: 'quarter' },
    { hour: 2, minute: 15, swedish: "kvart över två", english: "quarter past two", explanation: "15 minutes past", category: 'quarter' },
    { hour: 3, minute: 15, swedish: "kvart över tre", english: "quarter past three", explanation: "15 minutes past", category: 'quarter' },
    { hour: 4, minute: 15, swedish: "kvart över fyra", english: "quarter past four", explanation: "15 minutes past", category: 'quarter' },
    { hour: 5, minute: 15, swedish: "kvart över fem", english: "quarter past five", explanation: "15 minutes past", category: 'quarter' },
    { hour: 6, minute: 15, swedish: "kvart över sex", english: "quarter past six", explanation: "15 minutes past", category: 'quarter' },
    { hour: 7, minute: 15, swedish: "kvart över sju", english: "quarter past seven", explanation: "15 minutes past", category: 'quarter' },
    { hour: 8, minute: 15, swedish: "kvart över åtta", english: "quarter past eight", explanation: "15 minutes past", category: 'quarter' },
    { hour: 9, minute: 15, swedish: "kvart över nio", english: "quarter past nine", explanation: "15 minutes past", category: 'quarter' },
    { hour: 10, minute: 15, swedish: "kvart över tio", english: "quarter past ten", explanation: "15 minutes past", category: 'quarter' },
    { hour: 11, minute: 15, swedish: "kvart över elva", english: "quarter past eleven", explanation: "15 minutes past", category: 'quarter' },
    { hour: 12, minute: 15, swedish: "kvart över tolv", english: "quarter past twelve", explanation: "15 minutes past", category: 'quarter' },

    // Half (remember: Swedish uses NEXT hour!)
    { hour: 1, minute: 30, swedish: "halv två", english: "half past one", explanation: "Half way to TWO", category: 'half' },
    { hour: 2, minute: 30, swedish: "halv tre", english: "half past two", explanation: "Half way to THREE", category: 'half' },
    { hour: 3, minute: 30, swedish: "halv fyra", english: "half past three", explanation: "Half way to FOUR", category: 'half' },
    { hour: 4, minute: 30, swedish: "halv fem", english: "half past four", explanation: "Half way to FIVE", category: 'half' },
    { hour: 5, minute: 30, swedish: "halv sex", english: "half past five", explanation: "Half way to SIX", category: 'half' },
    { hour: 6, minute: 30, swedish: "halv sju", english: "half past six", explanation: "Half way to SEVEN", category: 'half' },
    { hour: 7, minute: 30, swedish: "halv åtta", english: "half past seven", explanation: "Half way to EIGHT", category: 'half' },
    { hour: 8, minute: 30, swedish: "halv nio", english: "half past eight", explanation: "Half way to NINE", category: 'half' },
    { hour: 9, minute: 30, swedish: "halv tio", english: "half past nine", explanation: "Half way to TEN", category: 'half' },
    { hour: 10, minute: 30, swedish: "halv elva", english: "half past ten", explanation: "Half way to ELEVEN", category: 'half' },
    { hour: 11, minute: 30, swedish: "halv tolv", english: "half past eleven", explanation: "Half way to TWELVE", category: 'half' },
    { hour: 12, minute: 30, swedish: "halv ett", english: "half past twelve", explanation: "Half way to ONE", category: 'half' },

    // Five to half (fem i halv) - 25 minutes past
    { hour: 1, minute: 25, swedish: "fem i halv två", english: "five to half two (25 past one)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 2, minute: 25, swedish: "fem i halv tre", english: "five to half three (25 past two)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 3, minute: 25, swedish: "fem i halv fyra", english: "five to half four (25 past three)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 4, minute: 25, swedish: "fem i halv fem", english: "five to half five (25 past four)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 5, minute: 25, swedish: "fem i halv sex", english: "five to half six (25 past five)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 6, minute: 25, swedish: "fem i halv sju", english: "five to half seven (25 past six)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 7, minute: 25, swedish: "fem i halv åtta", english: "five to half eight (25 past seven)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 8, minute: 25, swedish: "fem i halv nio", english: "five to half nine (25 past eight)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 9, minute: 25, swedish: "fem i halv tio", english: "five to half ten (25 past nine)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 10, minute: 25, swedish: "fem i halv elva", english: "five to half eleven (25 past ten)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 11, minute: 25, swedish: "fem i halv tolv", english: "five to half twelve (25 past eleven)", explanation: "5 minutes before halv", category: 'before' },
    { hour: 12, minute: 25, swedish: "fem i halv ett", english: "five to half one (25 past twelve)", explanation: "5 minutes before halv", category: 'before' },

    // Five past half (fem över halv) - 35 minutes past
    { hour: 1, minute: 35, swedish: "fem över halv två", english: "five past half two (35 past one)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 2, minute: 35, swedish: "fem över halv tre", english: "five past half three (35 past two)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 3, minute: 35, swedish: "fem över halv fyra", english: "five past half four (35 past three)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 4, minute: 35, swedish: "fem över halv fem", english: "five past half five (35 past four)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 5, minute: 35, swedish: "fem över halv sex", english: "five past half six (35 past five)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 6, minute: 35, swedish: "fem över halv sju", english: "five past half seven (35 past six)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 7, minute: 35, swedish: "fem över halv åtta", english: "five past half eight (35 past seven)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 8, minute: 35, swedish: "fem över halv nio", english: "five past half nine (35 past eight)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 9, minute: 35, swedish: "fem över halv tio", english: "five past half ten (35 past nine)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 10, minute: 35, swedish: "fem över halv elva", english: "five past half eleven (35 past ten)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 11, minute: 35, swedish: "fem över halv tolv", english: "five past half twelve (35 past eleven)", explanation: "5 minutes after halv", category: 'after' },
    { hour: 12, minute: 35, swedish: "fem över halv ett", english: "five past half one (35 past twelve)", explanation: "5 minutes after halv", category: 'after' },

    // Quarter to (all hours)
    { hour: 1, minute: 45, swedish: "kvart i två", english: "quarter to two", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 2, minute: 45, swedish: "kvart i tre", english: "quarter to three", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 3, minute: 45, swedish: "kvart i fyra", english: "quarter to four", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 4, minute: 45, swedish: "kvart i fem", english: "quarter to five", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 5, minute: 45, swedish: "kvart i sex", english: "quarter to six", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 6, minute: 45, swedish: "kvart i sju", english: "quarter to seven", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 7, minute: 45, swedish: "kvart i åtta", english: "quarter to eight", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 8, minute: 45, swedish: "kvart i nio", english: "quarter to nine", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 9, minute: 45, swedish: "kvart i tio", english: "quarter to ten", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 10, minute: 45, swedish: "kvart i elva", english: "quarter to eleven", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 11, minute: 45, swedish: "kvart i tolv", english: "quarter to twelve", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 12, minute: 45, swedish: "kvart i ett", english: "quarter to one", explanation: "15 minutes to next hour", category: 'quarter' },

    // Five past
    { hour: 2, minute: 5, swedish: "fem över två", english: "five past two", explanation: "5 minutes past", category: 'after' },
    { hour: 4, minute: 5, swedish: "fem över fyra", english: "five past four", explanation: "5 minutes past", category: 'after' },
    { hour: 8, minute: 5, swedish: "fem över åtta", english: "five past eight", explanation: "5 minutes past", category: 'after' },

    // Ten past
    { hour: 3, minute: 10, swedish: "tio över tre", english: "ten past three", explanation: "10 minutes past", category: 'after' },
    { hour: 6, minute: 10, swedish: "tio över sex", english: "ten past six", explanation: "10 minutes past", category: 'after' },
    { hour: 9, minute: 10, swedish: "tio över nio", english: "ten past nine", explanation: "10 minutes past", category: 'after' },

    // Twenty past
    { hour: 1, minute: 20, swedish: "tjugo över ett", english: "twenty past one", explanation: "20 minutes past", category: 'after' },
    { hour: 5, minute: 20, swedish: "tjugo över fem", english: "twenty past five", explanation: "20 minutes past", category: 'after' },
    { hour: 10, minute: 20, swedish: "tjugo över tio", english: "twenty past ten", explanation: "20 minutes past", category: 'after' },

    // Five to
    { hour: 3, minute: 55, swedish: "fem i fyra", english: "five to four", explanation: "5 minutes to next hour", category: 'before' },
    { hour: 7, minute: 55, swedish: "fem i åtta", english: "five to eight", explanation: "5 minutes to next hour", category: 'before' },
    { hour: 11, minute: 55, swedish: "fem i tolv", english: "five to twelve", explanation: "5 minutes to next hour", category: 'before' },

    // Ten to
    { hour: 2, minute: 50, swedish: "tio i tre", english: "ten to three", explanation: "10 minutes to next hour", category: 'before' },
    { hour: 5, minute: 50, swedish: "tio i sex", english: "ten to six", explanation: "10 minutes to next hour", category: 'before' },
    { hour: 8, minute: 50, swedish: "tio i nio", english: "ten to nine", explanation: "10 minutes to next hour", category: 'before' },

    // Twenty to
    { hour: 4, minute: 40, swedish: "tjugo i fem", english: "twenty to five", explanation: "20 minutes to next hour", category: 'before' },
    { hour: 7, minute: 40, swedish: "tjugo i åtta", english: "twenty to eight", explanation: "20 minutes to next hour", category: 'before' },
    { hour: 10, minute: 40, swedish: "tjugo i elva", english: "twenty to eleven", explanation: "20 minutes to next hour", category: 'before' },
];

export function getRandomTime(): ClockTime {
    return clockTimes[Math.floor(Math.random() * clockTimes.length)];
}

export function getRandomTimesByCategory(category: ClockTime['category'], count: number = 1): ClockTime[] {
    const filtered = clockTimes.filter(t => t.category === category);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export function generateWrongAnswers(correctTime: ClockTime, count: number = 3): string[] {
    const allTimes = clockTimes.filter(t => t.swedish !== correctTime.swedish);
    const shuffled = [...allTimes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map(t => t.swedish);
}

// Swedish hour words (1-12)
const swedishHours: { [key: number]: string } = {
    1: 'ett', 2: 'två', 3: 'tre', 4: 'fyra', 5: 'fem', 6: 'sex',
    7: 'sju', 8: 'åtta', 9: 'nio', 10: 'tio', 11: 'elva', 12: 'tolv'
};

// Swedish minute words (1-29)
const swedishMinutes: { [key: number]: string } = {
    1: 'ett', 2: 'två', 3: 'tre', 4: 'fyra', 5: 'fem', 6: 'sex',
    7: 'sju', 8: 'åtta', 9: 'nio', 10: 'tio', 11: 'elva', 12: 'tolv',
    13: 'tretton', 14: 'fjorton', 16: 'sexton', 17: 'sjutton',
    18: 'arton', 19: 'nitton', 20: 'tjugo', 21: 'tjugoett', 22: 'tjugotvå',
    23: 'tjugotre', 24: 'tjugofyra'
};

export function getWrittenSwedishTime(hour: number, minute: number): string {
    // Normalize hour to 1-12 range
    const normalizedHour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
    const currentHourWord = swedishHours[normalizedHour];
    const nextHour = normalizedHour === 12 ? 1 : normalizedHour + 1;
    const nextHourWord = swedishHours[nextHour];

    // Exact hour: 12:00 -> klockan tolv
    if (minute === 0) {
        return `klockan ${currentHourWord}`;
    }

    // Special case: Quarter past (15 minutes)
    if (minute === 15) {
        return `kvart över ${currentHourWord}`;
    }

    // Special case: Half past (30 minutes) - uses NEXT hour!
    if (minute === 30) {
        return `halv ${nextHourWord}`;
    }

    // Special case: Quarter to (45 minutes)
    if (minute === 45) {
        return `kvart i ${nextHourWord}`;
    }

    // Minutes 25-29: X i halv (to half)
    if (minute >= 25 && minute <= 29) {
        const minutesToHalf = 30 - minute;
        const minuteWord = swedishMinutes[minutesToHalf];
        return `${minuteWord} i halv ${nextHourWord}`;
    }

    // Minutes 31-35: X över halv (past half)
    if (minute >= 31 && minute <= 35) {
        const minutesFromHalf = minute - 30;
        const minuteWord = swedishMinutes[minutesFromHalf];
        return `${minuteWord} över halv ${nextHourWord}`;
    }

    // Minutes 1-24: X över (past) current hour
    if (minute >= 1 && minute <= 24) {
        const minuteWord = swedishMinutes[minute];
        return `${minuteWord} över ${currentHourWord}`;
    }

    // Minutes 36-59: X i (to) next hour
    if (minute >= 36 && minute <= 59) {
        const minutesToNext = 60 - minute;
        const minuteWord = swedishMinutes[minutesToNext];
        return `${minuteWord} i ${nextHourWord}`;
    }

    // Fallback (should never reach here)
    return `${normalizedHour}:${minute.toString().padStart(2, '0')}`;
}
