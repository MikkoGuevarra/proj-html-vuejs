var app = new Vue({
    el : '#root',
    data: {
        navMenu: ['Home', 'About us', 'Feature', 'Contact US'],
        title: 'The biggest platform for your growth',
        description: 'There are many variations of passages of Lorem Ipsum avalable, but the majority have suffered alteration in some form',
        cartCounter: 0,
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
        ],
        features: [
            {
                name: 'Customized Invoices',
                icon: 'fas fa-chart-line',
                color: 'blue'
            },
            {
                name: 'Stock Management',
                icon: 'far fa-paper-plane',
                color: 'red'
            },
            {
                name: 'Receivables & Payables',
                icon: 'fas fa-user-secret',
                color: 'green'
            },
            {
                name: 'Manage Buying',
                icon: 'far fa-thumbs-up',
                color: 'blue'
            },
            {
                name: 'Powerful & Secure',
                icon: 'fab fa-superpowers',
                color: 'red'
            },
            {
                name: 'Fastest Return Filing',
                icon: 'fas fa-user-secret',
                color: 'green'
            },
            {
                name: 'Monthly Deatiled',
                icon: 'far fa-edit',
                color: 'blue'
            },
            {
                name: 'Product Management',
                icon: 'far fa-thumbs-up',
                color: 'red'
            }
        ],
        testimonials: [
            {
                name: 'Julia Aann',
                position: 'COO Sofbox',
                photo_path: '26',
                message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accsu adip adip.'
            },
            {
                name: 'Mac Znder',
                position: 'Manager Sofbox',
                photo_path: '27',
                message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accsu adip adip.'
            },
            {
                name: 'Mac Znder 2',
                position: 'Manager Sofbox',
                photo_path: '25',
                message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accsu adip adip.'
            }
        ],
        posts: [
            {
                image: '19',
                title: 'Life Lack Meaning',
                desc: 'It is a long established fact that a reader wil be distracted by the readable.',
                date: 'Novermber 28, 2019'
            },
            {
                image: '18',
                title: 'Life Lack Meaning',
                desc: 'It is a long established fact that a reader wil be distracted by the readable.',
                date: 'Novermber 28, 2019'
            },
            {
                image: '17',
                title: 'Life Lack Meaning',
                desc: 'It is a long established fact that a reader wil be distracted by the readable.',
                date: 'Novermber 28, 2019'
            }
        ],
        socialIcons: [
            'fab fa-facebook-f',
            'fab fa-twitter',
            'fab fa-github',
            'fab fa-instagram'
        ],
        footer: [
            {
                title: 'Menu',
                submenu: ['About us', 'Theme', 'Features', 'Pricing', 'Blog']
            },
            {
                title: 'About Us',
                submenu: ['About Sofbox', 'Roadmap', 'How it Work', 'Team', 'News']
            },
            {
                title: 'Quick Links',
                submenu: ['About us', 'Theme', 'Features', 'Pricing', 'Blog']
            },
        ]
    },
    methods: {
        increaseCart() {
            this.cartCounter ++;
        },
        getIndex(index) {
            console.log(index);
        }
    }
});
