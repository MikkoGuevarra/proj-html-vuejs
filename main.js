var app = new Vue({
    el : '#root',
    data: {
        navMenu: ['Home', 'About us', 'Feature', 'Contact US'],
        title: 'The biggest platform for your growth',
        description: 'There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered alteration in some form',
        marketings: [
            {
                title: 'Online Marketing',
                photo_path: 'img/24.png',
                desc: 'It is a long established fact that a reader will be distracted',
                selection: [
                    'SEO',
                    'SEM',
                    'Web Strategy',
                    'Social management'
                ]
            },
            {
                title: 'Online Marketing',
                photo_path: 'img/24.png',
                desc: 'It is a long established fact that a reader will be distracted',
                selection: [
                    'SEO',
                    'SEM',
                    'Web Strategy',
                    'Social management'
                ]
            },
            {
                title: 'Online Marketing',
                photo_path: 'img/24.png',
                desc: 'It is a long established fact that a reader will be distracted',
                selection: [
                    'SEO',
                    'SEM',
                    'Web Strategy',
                    'Social management'
                ]
            }
        ],
        tips: [
            {
                title: 'Reporting Analysis',
                description: 'It is a long established fact that a reader wil be distracted by the readable content of a page when looking at its layout',
                photo_path:'510'
            },
            {
                title: 'Technical SEO audit',
                description: 'It is a long established fact that a reader wil be distracted by the readable content of a page when looking at its layout',
                photo_path:'511'
            },
        ]
    },
});
