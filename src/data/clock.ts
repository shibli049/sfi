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

    // Quarter past
    { hour: 1, minute: 15, swedish: "kvart över ett", english: "quarter past one", explanation: "15 minutes past", category: 'quarter' },
    { hour: 3, minute: 15, swedish: "kvart över tre", english: "quarter past three", explanation: "15 minutes past", category: 'quarter' },
    { hour: 5, minute: 15, swedish: "kvart över fem", english: "quarter past five", explanation: "15 minutes past", category: 'quarter' },
    { hour: 7, minute: 15, swedish: "kvart över sju", english: "quarter past seven", explanation: "15 minutes past", category: 'quarter' },
    { hour: 9, minute: 15, swedish: "kvart över nio", english: "quarter past nine", explanation: "15 minutes past", category: 'quarter' },
    { hour: 11, minute: 15, swedish: "kvart över elva", english: "quarter past eleven", explanation: "15 minutes past", category: 'quarter' },

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

    // Quarter to
    { hour: 2, minute: 45, swedish: "kvart i tre", english: "quarter to three", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 4, minute: 45, swedish: "kvart i fem", english: "quarter to five", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 6, minute: 45, swedish: "kvart i sju", english: "quarter to seven", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 8, minute: 45, swedish: "kvart i nio", english: "quarter to nine", explanation: "15 minutes to next hour", category: 'quarter' },
    { hour: 10, minute: 45, swedish: "kvart i elva", english: "quarter to eleven", explanation: "15 minutes to next hour", category: 'quarter' },
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
