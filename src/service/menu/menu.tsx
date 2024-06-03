// ีืicon https://tabler.io/icons/icon

const menu =
    [
        {
            name: 'Home',
            icon: 'ti ti-home',
            sub: [
                {
                    name: 'Learning Dropdown',
                    sub: [
                        {
                            name: 'Multiple Dropdown',
                            link: '/SystemParameter',
                            pageName: 'DropdownPage',
                            sub: null
                        },
                        {
                            name: 'Select Address',
                            link: '/SelectAddress',
                            pageName: 'AddressPage',
                            sub: null
                        }
                    ]
                },
                {
                    name: 'Learning Search',
                    link: '/AcceptanceBusiness',
                    sub: [
                        {
                            name: 'Multiple Dropdown',
                            link: '/AcceptanceBusiness',
                            pageName: 'DropdownPage',
                            sub: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'About Us',
            icon: 'ti ti-tournament',
            sub: [
                {
                    name: 'Our Team',
                    sub: [
                        {
                            name: 'Our Team',
                            link: '/SystemParameter',
                            pageName: 'DropdownPage',
                            sub: null
                        },
                        {
                            name: 'Our Story',
                            link: '/SystemParameter',
                            pageName: 'DropdownPage',
                            sub: null
                        },
                        {
                            name: 'Careers',
                            link: '/SystemParameter',
                            pageName: 'DropdownPage',
                            sub: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Services',
            icon: 'ti ti-devices-pc',
            sub: [
                {
                    name: 'Learning Dropdown',
                    sub: null
                }
            ]
        },
        {
            name: 'Products',
            icon: 'ti ti-brand-producthunt',
            sub: [
                {
                    name: 'Learning Dropdown',
                    sub: null
                }
            ]
        },
        {
            name: 'Blog',
            icon: 'ti ti-file-check',
            sub: null
        },
        {
            name: 'Contact',
            icon: 'ti ti-address-book',
            sub: [
                {
                    name: 'Learning Dropdown',
                    sub: null
                }
            ]
        }
    ]

export default menu