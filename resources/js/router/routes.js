const I18nComponent = () => import('../Views/I18.vue')

// Front
const FrontPage = () => import('../Views/Front/FrontPage.vue')
const MaranToken = () => import('../Views/Front/MaranToken.vue')
const AboutCompany = () => import('../Views/Front/AboutCompany.vue')
const InfoPage = () => import("../Views/Front/InfoPage.vue");
const SalesCategory = () => import("../Views/Front/SalesCategory.vue");
const SalesItem = () => import("../Views/Front/SalesItem.vue");

// Auth
// const Login = () => import('../Views/Auth/Login.vue')
// const Register = () => import('../Views/Auth/Register.vue')
// const Recovery = () => import('../Views/Auth/Recovery.vue')
// const ResetPassword = () => import('../Views/Auth/Reset.vue')

// Betting
const BettingMain = () => import('../Views/Betting/BettingMain.vue')
const BettingLive = () => import('../Views/Betting/BettingLive.vue')
const BettingCategory = () => import('../Views/Betting/BettingCategory.vue')
const BettingEsports = () => import('../Views/Betting/BettingEsports.vue')

// Results
const ResultsPage = () => import('../Views/Results/ResultsPage.vue')

// Dashboard
const Dashboard = () => import('../Views/Dashboard/Dashboard.vue')
const DashboardAccount = () => import('../Views/Dashboard/Account.vue')
const DashboardWallet = () => import('../Views/Dashboard/Wallet.vue')
const DashboardHistory = () => import('../Views/Dashboard/History.vue')
const DashboardHelp = () => import('../Views/Dashboard/Help.vue')
const DashboardResults = () => import('../Views/Dashboard/Results.vue')
const DashboardFavourites = () => import('../Views/Dashboard/Favourites.vue')

// Panelka
const Panelka = () => import('../Views/Panelka/Panelka.vue');
const PanelkaMain = () => import('../Views/Panelka/PanelkaMain.vue');
const PanelkaWithdraw = () => import('../Views/Panelka/WithdrawList.vue');
const PanelkaReplenishment = () => import('../Views/Panelka/ReplenishmentList.vue');
const PanelkaPromocodes = () => import('../Views/Panelka/PromocodesList.vue');
const StatisticUsedPromo = () => import('../Views/Panelka/StatisticUsedPromo.vue')
const StatisticPromoCodes = () => import('../Views/Panelka/StatisticPromoCodes.vue')
const StatisticUsersRating = () => import('../Views/Panelka/StatisticUsersRating.vue')
const StatisticUsersRegistration = () => import('../Views/Panelka/StatisticUsersRegistration.vue')
const StatisticBets = () => import('../Views/Panelka/StatisticBets.vue')
const StatisticLosses = () => import('../Views/Panelka/StatisticLosses.vue')
const StatisticWins = () => import('../Views/Panelka/StatisticWins.vue')
const StatisticUserDetail = () => import('../Views/Panelka/StatisticUserDetail.vue')
const StatisticWithdraw = () => import('../Views/Panelka/StatisticWithdraw.vue')
const StatisticTokens = () => import('../Views/Panelka/StatisticTokens.vue')

export default [
    {
        path: '/',
        redirect: '/en',
    },
    {path: '/api/:page'},
    {
        path: '/:lang',
        component: I18nComponent,
        name: 'front-page',
        meta: {
            guard: 'guest'
        },
        children: [
            {
                path: '',
                component: FrontPage,
                name: 'landing',
                meta: {
                    guard: 'guest',
                    header: 'landing'
                },
            },
            {
                path: 'maran-token',
                component: MaranToken,
                name: 'maran-token',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'about',
                component: AboutCompany,
                name: 'about-company',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            // Auth
            // временно отключено
            // {
            //     path: 'auth',
            //     component: Login,
            //     name: 'login',
            //     meta: {
            //         guard: 'auth_page',
            //         header: 'auth'
            //     }
            // },
            // {
            //     path: 'register',
            //     component: Register,
            //     name: 'register',
            //     meta: {
            //         guard: 'auth_page',
            //         header: 'auth'
            //     }
            // },
            // {
            //     path: 'recovery',
            //     component: Recovery,
            //     name: 'recovery',
            //     meta: {
            //         guard: 'auth_page',
            //         header: 'auth'
            //     }
            // },
            // {
            //     path: 'reset-password/:token',
            //     component: ResetPassword,
            //     name: 'reset-password',
            //     meta: {
            //         guard: 'guest',
            //         header: 'auth'
            //     }
            // },

            // Betting
            {
                path: 'betting',
                component: BettingMain,
                name: 'betting',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                },
            },
            {
                path: 'esports',
                component: BettingEsports,
                name: 'esports',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'live',
                component: BettingMain,
                name: 'betting-live',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'live/:subcategory',
                component: BettingMain,
                name: 'betting-live-category',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'betting/sport/:subcategory',
                component: BettingMain,
                name: 'betting-category',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                },
            },
            {
                path: 'betting/sport/:subcategory/:country?/:tournament?',
                component: BettingMain,
                name: 'betting-category-tournament',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                },
            },
            {
                path: 'betting/sport/:subcategory/search/tournament/:p_tournament',
                component: BettingMain,
                name: 'betting-search-tournament',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'betting/sport/:subcategory/search/team/:p_name',
                component: BettingMain,
                name: 'betting-search-team',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'betting/sport/:subcategory/search/player/:p_name',
                component: BettingMain,
                name: 'betting-search-player',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'betting/sport/:subcategory/search/country/:p_name/:p_sport',
                component: BettingMain,
                name: 'betting-search-country',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            // Results
            {
                path: 'results',
                component: ResultsPage,
                name: 'results',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'results-category/:category',
                component: ResultsPage,
                name: 'results-category',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            // Info Pages
            {
                path: 'page/:slug',
                component: InfoPage,
                name: 'info-page',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            // Sales Pages
            {
                path: 'sales',
                component: SalesCategory,
                name: 'sales',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            {
                path: 'sales/:slug',
                component: SalesItem,
                name: 'sales-item',
                meta: {
                    guard: 'guest',
                    header: 'betting'
                }
            },
            // Cabinet
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'dashboard-template',
                meta: {
                    guard: 'auth',
                    header: 'dashboard'
                },
                children: [
                    {
                        path: '',
                        component: DashboardAccount,
                        name: 'dashboard',
                        meta: {
                            guard: 'auth',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'wallet',
                        component: DashboardWallet,
                        name: 'dashboard-wallet',
                        meta: {
                            guard: 'auth',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'history/:page?',
                        component: DashboardHistory,
                        name: 'dashboard-history',
                        meta: {
                            guard: 'auth',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'help',
                        component: DashboardHelp,
                        name: 'dashboard-help',
                        meta: {
                            guard: 'auth',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'results/:page?',
                        component: DashboardResults,
                        name: 'dashboard-results',
                        meta: {
                            guard: 'auth',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'favourites',
                        component: DashboardFavourites,
                        name: 'dashboard-favourites',
                        meta: {
                            guard: 'auth',
                            header: 'dashboard'
                        }
                    }

                ]
            },
            // Admin
            {
                path: 'panelka',
                component: Panelka,
                name: 'panel-template',
                meta: {
                    guard: 'admin',
                    header: 'dashboard'
                },
                children: [
                    {
                        path: '',
                        component: PanelkaMain,
                        name: 'panel',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'promocodes',
                        component: PanelkaPromocodes,
                        name: 'panel-promocodes',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'replenishment',
                        component: PanelkaReplenishment,
                        name: 'panel-replenishment',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'withdraw',
                        component: PanelkaWithdraw,
                        name: 'panel-withdraw',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-promocodes',
                        component: StatisticPromoCodes,
                        name: 'panel-statistic-promocodes',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-used-promo/:id',
                        component: StatisticUsedPromo,
                        name: 'statistic-used-promo',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-users-rating/:page?',
                        component: StatisticUsersRating,
                        name: 'statistic-users-rating',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-user/:id/:wallet',
                        component: StatisticUserDetail,
                        name: 'statistic-user-detail',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-users-registration',
                        component: StatisticUsersRegistration,
                        name: 'statistic-users-registration',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-bets',
                        component: StatisticBets,
                        name: 'statistic-bets',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-losses',
                        component: StatisticLosses,
                        name: 'statistic-losses',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-wins',
                        component: StatisticWins,
                        name: 'statistic-wins',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-withdraw',
                        component: StatisticWithdraw,
                        name: 'statistic-withdraw',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                    {
                        path: 'statistic-tokens',
                        component: StatisticTokens,
                        name: 'statistic-tokens',
                        meta: {
                            guard: 'admin',
                            header: 'dashboard'
                        }
                    },
                ]
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/en',
    },
]
