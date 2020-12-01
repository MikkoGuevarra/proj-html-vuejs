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
                icon: 'fas fa-chart-line'
            },
            {
                name: 'Stock Management',
                icon: 'far fa-paper-plane'
            },
            {
                name: 'Receivables & Payables',
                icon: 'fas fa-user-secret'
            },
            {
                name: 'Manage Buying',
                icon: 'far fa-thumbs-up'
            },
            {
                name: 'Powerful & Secure',
                icon: 'fab fa-superpowers'
            },
            {
                name: 'Fastest Return Filing',
                icon: 'fas fa-user-secret'
            },
            {
                name: 'Monthly Deatiled',
                icon: 'far fa-edit'
            },
            {
                name: 'Product Management',
                icon: 'far fa-thumbs-up'
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
            }
        ]
    },
    methods: {
        increaseCart() {
            this.cartCounter ++;
        }
    }
});
