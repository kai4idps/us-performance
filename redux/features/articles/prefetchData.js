export const blogId =
    process.env.NODE_ENV === 'production'
        ? {
            all: {
                name: 'all',
                key: 'all',
                title: 'All',
                id: '',
            },
            dogCamera: {
                name: 'dog-camera',
                key: 'dogCamera',
                title: 'Dog Camera',
                id: 81703937,
            },
            holiday: {
                name: 'holiday',
                key: 'holiday',
                title: 'Holiday',
                id: 73417857,
            },
            guideToHelp: {
                name: 'guide-to-helping-dogs-with-separation-anxiety',
                key: 'guideToHelp',
                title: 'Guide to Helping Dogs with Separation Anxiety',
                id: 8989868077,
            },
            knowledge: {
                name: 'knowledge',
                key: 'knowledge',
                title: 'Knowledge',
                id: 73417921,
            },
            news: {
                name: 'news',
                key: 'news',
                title: 'News',
                id: 63573569,
            },
            pressMention: {
                name: 'press-mention',
                key: 'pressMention',
                title: 'Press Mention',
                id: 73162433,
            },
            rehomeDogs: {
                name: 'rehome-1-001-dogs-by-2020',
                key: 'rehomeDogs',
                title: 'Rehome 1,001 Dogs by 2020',
                id: 62207688749,
            },
            training: {
                name: 'training',
                key: 'training',
                title: 'Training',
                id: 73417793,
            },
            userTestimonials: {
                name: 'user-testimonials',
                key: 'userTestimonials',
                title: 'User Testimonials',
                id: 63824193,
            },
            userUnboxing: {
                name: 'user-unboxing',
                key: 'userUnboxing',
                title: 'User Unboxing',
                id: 77624577,
            },
        }
        : {
            all: {
                name: 'all',
                key: 'all',
                title: 'All',
                id: '',
            },
            holiday: {
                name: 'holiday',
                key: 'holiday',
                title: 'Holiday',
                id: 94808329,
            },
            knowledge: {
                name: 'knowledge',
                key: 'knowledge',
                title: 'Knowledge',
                id: 94808393,
            },
            news: {
                name: 'news',
                key: 'news',
                title: 'News',
                id: 94761737,
            },
            pressMention: {
                name: 'press-mention',
                key: 'pressMention',
                title: 'Press Mention',
                id: 94808457,
            },
            training: {
                name: 'training',
                key: 'training',
                title: 'Training',
                id: 94808521,
            },
            userTestimonials: {
                name: 'user-testimonials',
                key: 'userTestimonials',
                title: 'User Testimonials',
                id: 94808585,
            },
        };
