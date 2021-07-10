import { PixelRatio } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default {
    colors: {
        primary: {
            light: '#FCE6CC',
            natural: '#EF870C',
            dark: '#FF872C',
        },
        secondary: {
            natural: '#BDBDBD',
        },
        background: {
            primary: '#FFFFFF',
            contrast: '#000000'
        },
        typography: {
            contrast: {
                light: '#828282',
                natural: '#4F4F4F',
                dark: '#333333',
            },
            shape: {
                light: '#E0E0E0',
                natural: '#F2F2F2',
                dark: '#BDBDBD',
            },
            title: {
                natural: '#333333',
                contrast: '#F2F2F2',
            },
            subTitle: {
                natural: '#4F4F4F',
            },
        },
        feedback: {
            important: {
                light: '#FCE6CC',
                natural: '#EE8100',
                dark: '#FF872C',
            },
            attention: {
                light: '#F6C9CB',
                natural: '#EB5757',
                dark: '#DF2B34',
            },
            warning: {
                light: '#FEF7B8',
                natural: '#F2C94C',
                dark: '#E3B40B',
            },
            success: {
                light: '#DBF3E5',
                natural: '#17A841',
                dark: '#219653'
            },
            information: {
                light: '#DBE9F3',
                natural: '#2F80ED',
                dark: '#0052CC',
            },
            domain: {
                light: '#BB6BD9',
                natural: '##9B51E0',
            },
            unknown: {
                natural: '#4F4F4F',
            }
        },
        icons: {
            primary: {
                light: '#FCE6CC',
                natural: '#EE8100',
                dark: '#FF872C',
            },
            location: {
                construction: {
                    light: '#FEF7B8',
                    natural: '#F2C94C',
                    dark: '#E3B40B',
                }
            },
            feedback: {
                attention: {
                    light: '#F6C9CB',
                    natural: '#EB5757',
                    dark: '#DF2B34',
                },
                warning: {
                    light: '#FEF7B8',
                    natural: '#F2C94C',
                    dark: '#E3B40B',

                },
                success: {
                    light: '#DBF3E5',
                    natural: '#17A841',
                    dark: '#219653'
                },
                information: {
                    light: '#DBE9F3',
                    natural: '#2F80ED',
                    dark: '#0052CC',
                },
                domain: {
                    light: '#BB6BD9',
                    natural: '##9B51E0',
                },
                unknown: {
                    light: '#F2F2F2',
                    natural: '#BDBDBD',
                    dark: '#4F4F4F',
                }
            },
        },
        ranking: {
            light: '#FEF7B8',
            natural: '#F2C94C',
            dark: '#E3B40B',
        }
    },
    typography: {
        little: {
            light: {
                fontSize: RFValue(PixelRatio.getFontScale() * 12),
                lineHeight: RFValue(PixelRatio.getFontScale() * 20),
                fontFamily: 'Inter_400Regular',
            },
            natural: {
                fontSize: RFValue(PixelRatio.getFontScale() * 12),
                lineHeight: RFValue(PixelRatio.getFontScale() * 1),
                fontFamily: 'Inter_500Medium',
            },
            dark: {
                fontSize: RFValue(PixelRatio.getFontScale() * 12),
                lineHeight: RFValue(PixelRatio.getFontScale() * 1),
                fontFamily: 'Inter_700Bold',
            },
        },
        small: {
            light: {
                fontSize: RFValue(PixelRatio.getFontScale() * 14),
                lineHeight: RFValue(PixelRatio.getFontScale() * 20),
                fontFamily: 'Inter_400Regular',
            },
            natural: {
                fontSize: RFValue(PixelRatio.getFontScale() * 14),
                lineHeight: RFValue(PixelRatio.getFontScale() * 16),
                fontFamily: 'Inter_500Medium',
            },
            dark: {
                fontSize: RFValue(PixelRatio.getFontScale() * 14),
                lineHeight: RFValue(PixelRatio.getFontScale() * 16),
                fontFamily: 'Inter_700Bold',
            }
        },
        regular: {
            light: {
                fontSize: RFValue(PixelRatio.getFontScale() * 16),
                lineHeight: RFValue(PixelRatio.getFontScale() * 24),
                fontFamily: 'Inter_400Regular',
            },
            natural: {
                fontSize: RFValue(PixelRatio.getFontScale() * 16),
                lineHeight: RFValue(PixelRatio.getFontScale() * 20),
                fontFamily: 'Inter_500Medium',
            },
            dark: {
                fontSize: RFValue(PixelRatio.getFontScale() * 16),
                lineHeight: RFValue(PixelRatio.getFontScale() * 20),
                fontFamily: 'Inter_600SemiBold',
            }
        },
        medium: {
            natural: {
                fontSize: RFValue(PixelRatio.getFontScale() * 18),
                lineHeight: RFValue(PixelRatio.getFontScale() * 24),
                fontFamily: 'Inter_500Medium',
            }
        },
        large: {
            natural: {
                fontSize: RFValue(PixelRatio.getFontScale() * 24),
                lineHeight: RFValue(PixelRatio.getFontScale() * 32),
                fontFamily: 'Inter_500Medium',
            }
        }
    }
}