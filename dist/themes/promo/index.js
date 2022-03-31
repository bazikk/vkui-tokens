"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": "promo",
    "fontFamilyAccent": "MailSans, Helvetica, Arial, sans-serif",
    "fontFamilyBase": "Helvetica, Arial, sans-serif",
    "fontWeightAccent1": 500,
    "fontWeightAccent2": 500,
    "fontWeightAccent3": 400,
    "fontWeightBase1": 700,
    "fontWeightBase2": 700,
    "fontWeightBase3": 400,
    "fontTitle1": {
        "compactX": {
            "fontSize": 24,
            "lineHeight": "32px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "compact": {
            "fontSize": 20,
            "lineHeight": "28px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "regular": {
            "fontSize": 24,
            "lineHeight": "32px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "large": {
            "fontSize": 32,
            "lineHeight": "40px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "largeX": {
            "fontSize": 32,
            "lineHeight": "40px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "largeXX": {
            "fontSize": 40,
            "lineHeight": "48px",
            "fontWeight": 400,
            "margin": "0 0 32px 0"
        }
    },
    "fontTitle2": {
        "regular": {
            "fontSize": 20,
            "lineHeight": 26,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontTitle3": {
        "regular": {
            "fontSize": 17,
            "lineHeight": 22,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontHeadline1": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20
        }
    },
    "fontHeadline2": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 14,
            "lineHeight": 20
        }
    },
    "fontText": {
        "regular": {
            "fontSize": 18,
            "lineHeight": "28px",
            "fontWeight": 300
        }
    },
    "fontParagraph": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontSubhead": {
        "regular": {
            "fontSize": 14,
            "lineHeight": 18,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {
            "fontSize": 13,
            "lineHeight": 18
        }
    },
    "fontFootnote": {
        "regular": {
            "fontSize": 14,
            "lineHeight": "20px",
            "fontWeight": 300
        }
    },
    "fontFootnoteCaps": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 18,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.3px"
        }
    },
    "fontCaption1": {
        "regular": {
            "fontSize": 12,
            "lineHeight": 16,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontCaption1Caps": {
        "regular": {
            "fontSize": 12,
            "lineHeight": 16,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.26px"
        }
    },
    "fontCaption2": {
        "regular": {
            "fontSize": 11,
            "lineHeight": 14,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontCaption2Caps": {
        "regular": {
            "fontSize": 11,
            "lineHeight": 14,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.22px"
        }
    },
    "fontCaption3": {
        "regular": {
            "fontSize": 9,
            "lineHeight": 12,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontCaption3Caps": {
        "regular": {
            "fontSize": 9,
            "lineHeight": 12,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.16px"
        }
    },
    "sizeSelectIconPadding": {
        "regular": 7,
        "compact": 6
    },
    "sizePopupBasePadding": {
        "regular": 20,
        "compact": 32
    },
    "sizePopupHeaderPadding": {
        "regular": 16,
        "compact": 24
    },
    "sizeBorderRadius": {
        "regular": 8
    },
    "sizeCheckBorderRadius": {
        "regular": 4
    },
    "sizeBorderRadiusPaper": {
        "regular": 12
    },
    "sizeBorderRadiusPromo": {
        "regular": 20
    },
    "sizeFieldHeight": {
        "regular": 48,
        "compact": 40
    },
    "sizeButtonLargeHeight": {
        "regular": 48
    },
    "sizeButtonMediumHeight": {
        "compactX": 64,
        "compact": 52,
        "regular": 52,
        "large": 64,
        "largeX": 64,
        "largeXX": 64
    },
    "sizeButtonSmallHeight": {
        "regular": 40
    },
    "sizeCheckbox": {
        "regular": 16
    },
    "sizeArrow": {
        "regular": 8
    },
    "sizeArrowPromo": {
        "regular": 40
    },
    "sizePopupSmall": {
        "regular": 420
    },
    "sizePopupMedium": {
        "regular": 680
    },
    "sizePopupLarge": {
        "regular": 880
    },
    "sizeFieldHorizontalPadding": {
        "regular": 12
    },
    "sizeButtonPaddingHorizontal": {
        "regular": 32
    },
    "sizeLabelHorizontalMargin": {
        "regular": 16
    },
    "sizeArrowPadding": {
        "regular": 12
    },
    "sizeTooltipMargin": {
        "regular": 8
    },
    "sizeIconUI": {
        "compactX": 20,
        "compact": 20,
        "regular": 20,
        "large": 24,
        "largeX": 24,
        "largeXX": 24
    },
    "sizeAvatarXS": {
        "regular": 24
    },
    "sizeAvatarS": {
        "regular": 32
    },
    "sizeAvatarM": {
        "regular": 48
    },
    "sizeAvatarL": {
        "regular": 96
    },
    "sizeAvatarXL": {
        "regular": 128
    },
    "sizeBadgeXS": {
        "regular": 12
    },
    "sizeBadgeS": {
        "regular": 16
    },
    "sizeBadgeM": {
        "regular": 24
    },
    "sizeBadgeL": {
        "regular": 44
    },
    "sizeBadgeXL": {
        "regular": 56
    },
    "sizeCardgridPadding": {
        "regular": 12
    },
    "sizeCardBorderRadius": {
        "regular": 16
    },
    "sizeCardgridPaddingVertical": {
        "regular": 8
    },
    "sizeBasePaddingHorizontal": {
        "regular": 16
    },
    "sizeButtonGroupGapSpace": {
        "regular": 1
    },
    "sizeButtonGroupGapSmall": {
        "regular": 8
    },
    "sizeButtonGroupGapMedium": {
        "regular": 12
    },
    "elevation1": "0 2px 0 0 rgba(0, 16, 61, 0.04)",
    "elevation2": "0 4px 32px 0 rgba(0, 16, 61, 0.32)",
    "elevation3": "0 16px 48px 0 rgba(0, 0, 0, 0.48)",
    "elevation4": "0 16px 48px 0 rgba(0, 0, 0, 0.48)",
    "animationDurationL": "0.4s",
    "animationDurationM": "0.2s",
    "animationDurationS": "0.1s",
    "animationEasingDefault": "cubic-bezier(0.3, 0.3, 0.5, 1)",
    "opacityDisable": 0.48,
    "opacityDisableAccessibility": 0.64,
    "x0": 0,
    "x025": 1,
    "x05": 2,
    "x1": 4,
    "x2": 8,
    "x3": 12,
    "x4": 16,
    "x5": 20,
    "x6": 24,
    "x8": 32,
    "x10": 40,
    "x12": 48,
    "x15": 60,
    "x20": 80,
    "sizeBase": 4,
    "sizeGrid": 20,
    "breakpoints": {
        "touch": {
            "adaptiveValue": "compactX",
            "breakpoint": 0
        },
        "tablet": {
            "adaptiveValue": "compact",
            "breakpoint": 768
        },
        "desktopS": {
            "adaptiveValue": "regular",
            "breakpoint": 1000
        },
        "desktopM": {
            "adaptiveValue": "large",
            "breakpoint": 1300
        },
        "desktopL": {
            "adaptiveValue": "largeX",
            "breakpoint": 1600
        },
        "desktopXL": {
            "adaptiveValue": "largeXX",
            "breakpoint": 2200
        }
    },
    "fontH0": {
        "regular": {
            "fontSize": 28,
            "lineHeight": 32,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 44,
            "lineHeight": 52
        }
    },
    "fontH1": {
        "compactX": {
            "fontSize": 40,
            "lineHeight": "48px",
            "fontWeight": 400,
            "margin": "0 0 32px 0"
        },
        "compact": {
            "fontSize": 48,
            "lineHeight": "56px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "regular": {
            "fontSize": 48,
            "lineHeight": "56px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "large": {
            "fontSize": 64,
            "lineHeight": "72px",
            "fontWeight": 400,
            "margin": "0 0 32px 0"
        },
        "largeX": {
            "fontSize": 88,
            "lineHeight": "96px",
            "fontWeight": 400,
            "margin": "0 0 40px 0"
        },
        "largeXX": {
            "fontSize": 88,
            "lineHeight": "96px",
            "fontWeight": 400,
            "margin": "0 0 40px 0"
        }
    },
    "fontH2": {
        "compactX": {
            "fontSize": 28,
            "lineHeight": "36px",
            "fontWeight": 400,
            "margin": "0 0 24px 0"
        },
        "compact": {
            "fontSize": 32,
            "lineHeight": "40px",
            "fontWeight": 400,
            "margin": "0 0 28px 0"
        },
        "regular": {
            "fontSize": 40,
            "lineHeight": "48px",
            "fontWeight": 400,
            "margin": "0 0 32px 0"
        },
        "large": {
            "fontSize": 48,
            "lineHeight": "56px",
            "fontWeight": 400,
            "margin": "0 0 32px 0"
        },
        "largeX": {
            "fontSize": 48,
            "lineHeight": "56px",
            "fontWeight": 400,
            "margin": "0 0 32px 0"
        },
        "largeXX": {
            "fontSize": 64,
            "lineHeight": "72px",
            "fontWeight": 400,
            "margin": "0 0 40px 0"
        }
    },
    "sizeArrowHeight": {
        "regular": 8
    },
    "sizeArrowWidth": {
        "regular": 12
    },
    "sizeBasePadding": {
        "regular": 16,
        "compact": 20
    },
    "sizeBorderWidthTab": {
        "regular": 2
    },
    "sizeBorderWidthBar": {
        "regular": 4
    },
    "sizeBorderWidthAccent": {
        "regular": 8
    },
    "sizeBorderWidthAccentSecondary": {
        "regular": 8
    },
    "sizeControlButtonWidthMin": {
        "regular": 280
    },
    "sizePromoButtonClose": {
        "regular": 32
    },
    "sizeButtonSliderHeight": {
        "regular": 24
    },
    "sizeButtonSliderWidth": {
        "regular": 12
    },
    "sizeButtonSliderWidthPointer": {
        "regular": 16
    },
    "sizeFieldWidthMin": {
        "regular": 328,
        "compact": 380
    },
    "sizeLabelWidth": {
        "regular": 184
    },
    "sizeProgress": {
        "regular": 4
    },
    "sizeProgressScroll": {
        "regular": 12
    },
    "sizeDotBullet": {
        "regular": 4
    },
    "sizeDotIndicate": {
        "regular": 8
    },
    "sizeDotClickable": {
        "regular": 12
    },
    "sizeVerticalPadding": {
        "regular": 0
    },
    "sizeButtonMorePadding": {
        "regular": 8
    },
    "sizeIconMorePadding": {
        "regular": 12,
        "compact": 8
    },
    "sizeButtonIconPadding": {
        "regular": 16,
        "compact": 20
    },
    "sizeDivPadding": {
        "regular": 4
    },
    "sizeMenuPadding": {
        "regular": 8
    },
    "sizeTagPadding": {
        "regular": 8
    },
    "sizeTabPadding": {
        "regular": 16
    },
    "sizeTableHorizontalPadding": {
        "regular": 16
    },
    "sizeTableVerticalPadding": {
        "regular": 16
    },
    "sizeSliceTopPadding": {
        "regular": 40
    },
    "sizeSliceBottomPadding": {
        "regular": 60
    },
    "sizeBaseMargin": {
        "regular": 12
    },
    "sizeLabelVerticalMargin": {
        "regular": 4
    },
    "sizeTipMargin": {
        "regular": 4
    },
    "sizeFieldHorizontalMargin": {
        "regular": 20
    },
    "sizeFieldVerticalMargin": {
        "regular": 24
    },
    "sizeFieldSetMargin": {
        "regular": 32
    },
    "sizeIconMargin": {
        "regular": 12,
        "compact": 8
    },
    "sizeChoiceMargin": {
        "regular": 8
    },
    "sizeMenuMargin": {
        "regular": 2
    },
    "sizeTagMargin": {
        "regular": 8
    },
    "sizeTabMargin": {
        "regular": 8
    },
    "sizeBulletMargin": {
        "regular": 12
    },
    "sizeAttributeMargin": {
        "regular": 4
    },
    "sizePopupMargin": {
        "regular": 8,
        "compact": 24
    },
    "sizeHeaderIcon": {
        "regular": 20
    },
    "sizeWysiwygIcon": {
        "regular": 14
    },
    "sizeIllustrationS": {
        "regular": 48
    },
    "sizeIllustrationXM": {
        "regular": 72
    },
    "sizeIllustrationM": {
        "compactX": 96,
        "compact": 48,
        "regular": 48,
        "large": 96,
        "largeX": 96,
        "largeXX": 96
    },
    "sizeIllustrationL": {
        "regular": 144
    },
    "sizeIllustrationXXL": {
        "compactX": 280,
        "compact": 280,
        "regular": 360,
        "large": 380,
        "largeX": 560,
        "largeXX": 560
    },
    "toneValueOverlay": 0.48,
    "toneValueViewer": 0.88,
    "toneValueToolbar": 0.24,
    "toneValueHover": 0.04,
    "toneValueActive": 0.08,
    "toneValueFocus": 0.08,
    "typeBorderButton": "solid",
    "typeBorderPosition": "inset",
    "themeNameBase": "promo",
    "sizeControlButtonSmallWidthMin": {
        "regular": 160
    },
    "fontWeightBold": 500,
    "fontWeightMedium": 400,
    "sizeMarginIllustrationM": {
        "compactX": 32,
        "compact": 24,
        "regular": 24,
        "large": 32,
        "largeX": 32,
        "largeXX": 32
    },
    "sizeMarginIllustrationXXL": {
        "compactX": 40,
        "compact": 40,
        "regular": 60,
        "large": 100,
        "largeX": 100,
        "largeXX": 140
    },
    "sizeContentBlockWidth": {
        "compactX": "100%",
        "compact": 700,
        "regular": 940,
        "large": 1220,
        "largeX": 1260,
        "largeXX": 1380
    },
    "sizeContentBlockHorizontalPadding": {
        "compactX": 20,
        "compact": 0,
        "regular": 0,
        "large": 0,
        "largeX": 0,
        "largeXX": 0
    },
    "sizeHeaderHeightMin": {
        "regular": "90%"
    },
    "sizeContentBlockVerticalPadding": {
        "compactX": 48,
        "compact": 56,
        "regular": 56,
        "large": 72,
        "largeX": 88,
        "largeXX": 96
    },
    "sizeGridColumn1X3": {
        "compactX": "100%",
        "compact": 200,
        "regular": 260,
        "large": 340,
        "largeX": 380,
        "largeXX": 380
    },
    "sizeGridColumn2X3": {
        "compactX": "100%",
        "compact": 450,
        "regular": 600,
        "large": 780,
        "largeX": 820,
        "largeXX": 920
    },
    "sizeGridColumn1X2": {
        "compactX": "100%",
        "compact": 320,
        "regular": 420,
        "large": 560,
        "largeX": 580,
        "largeXX": 620
    },
    "sizeGridColumnAsymmetricalSmall": {
        "compactX": "100%",
        "compact": 260,
        "regular": 420,
        "large": 500,
        "largeX": 540,
        "largeXX": 600
    },
    "sizeGridColumnAsymmetricalLarge": {
        "compactX": "100%",
        "compact": 380,
        "regular": 440,
        "large": 560,
        "largeX": 560,
        "largeXX": 640
    },
    "sizeMarginXS": {
        "compactX": 12,
        "compact": 12,
        "regular": 12,
        "large": 16,
        "largeX": 16,
        "largeXX": 16
    },
    "sizeMarginS": {
        "compactX": 16,
        "compact": 16,
        "regular": 20,
        "large": 24,
        "largeX": 32,
        "largeXX": 32
    },
    "sizeMarginM": {
        "compactX": 24,
        "compact": 24,
        "regular": 24,
        "large": 32,
        "largeX": 40,
        "largeXX": 40
    },
    "sizeMarginL": {
        "compactX": 32,
        "compact": 32,
        "regular": 32,
        "large": 40,
        "largeX": 48,
        "largeXX": 48
    },
    "fontHeadline": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20
        }
    },
    "colorsScheme": "light",
    "colorBackgroundAccent": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorBackgroundAccentThemed": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorBackgroundAccentAlternative": {
        "normal": "#FF9E00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "colorBackgroundContent": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundSecondary": {
        "normal": "#F0F1F3",
        "hover": "#E6E8EC",
        "active": "#DDDFE4"
    },
    "colorBackgroundSecondaryAlpha": {
        "normal": "rgba(0, 16, 61, 0.06)",
        "hover": "rgba(0, 16, 61, 0.1)",
        "active": "rgba(0, 16, 61, 0.14)"
    },
    "colorBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundContrastSecondaryAlpha": {
        "normal": "rgba(255, 255, 255, 0.20)",
        "hover": "rgba(255, 255, 255, 0.24)",
        "active": "rgba(255, 255, 255, 0.28)"
    },
    "colorBackgroundWarning": {
        "normal": "#FFF1AD",
        "hover": "#F5E8A9",
        "active": "#EBDFA4"
    },
    "colorBackgroundNegative": {
        "normal": "#ED0A34",
        "hover": "#E40A34",
        "active": "#DA0A35"
    },
    "colorBackgroundTertiary": {
        "normal": "#F9F9FA",
        "hover": "#EFF0F2",
        "active": "#E5E6EB"
    },
    "colorBackgroundModal": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorBackgroundPositive": {
        "normal": "#0DC268",
        "hover": "#0CBB66",
        "active": "#0CB465"
    },
    "colorBackgroundNegativeTint": {
        "normal": "#FAEBEB",
        "hover": "#F0E2E4",
        "active": "#E6D9DD"
    },
    "colorTextAccent": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorTextAccentThemed": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorTextNegative": {
        "normal": "#ED0A34",
        "hover": "#E40A34",
        "active": "#DA0A35"
    },
    "colorTextLink": {
        "normal": "#005BD1",
        "hover": "#0058CB",
        "active": "#0055C5"
    },
    "colorTextLinkThemed": {
        "normal": "#005BD1",
        "hover": "#0058CB",
        "active": "#0055C5"
    },
    "colorTextMuted": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorTextPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorTextPrimaryInvariably": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorTextSecondary": {
        "normal": "#87898F",
        "hover": "#82848C",
        "active": "#7C7F88"
    },
    "colorTextSubhead": {
        "normal": "#797A80",
        "hover": "#74767D",
        "active": "#6F727B"
    },
    "colorTextTertiary": {
        "normal": "#AAADB3",
        "hover": "#A3A7AE",
        "active": "#9CA0AA"
    },
    "colorTextLinkVisited": {
        "normal": "#528FDF",
        "hover": "#4F8AD9",
        "active": "#4B85D2"
    },
    "colorTextContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorTextContrastThemed": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorLinkContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorTextPositive": {
        "normal": "#0DC268",
        "hover": "#0CBB66",
        "active": "#0CB465"
    },
    "colorIconAccent": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorIconNegative": {
        "normal": "#ED0A34",
        "hover": "#E40A34",
        "active": "#DA0A35"
    },
    "colorIconPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorIconPrimaryInvariably": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "colorIconMedium": {
        "normal": "#919399",
        "hover": "#8B8E95",
        "active": "#858992"
    },
    "colorIconMediumAlpha": {
        "normal": "rgba(39, 43, 55, 0.5)",
        "hover": "rgba(39, 43, 55, 0.54)",
        "active": "rgba(39, 43, 55, 0.58)"
    },
    "colorIconSecondary": {
        "normal": "#A5A7AD",
        "hover": "#9EA1A9",
        "active": "#989BA4"
    },
    "colorIconSecondaryAlpha": {
        "normal": "rgba(39, 43, 55, 0.3)",
        "hover": "rgba(39, 43, 55, 0.34)",
        "active": "rgba(39, 43, 55, 0.38)"
    },
    "colorIconTertiary": {
        "normal": "#CFD1D6",
        "hover": "#C7C9D0",
        "active": "#BEC2CA"
    },
    "colorIconTertiaryAlpha": {
        "normal": "rgba(39, 43, 55, 0.2)",
        "hover": "rgba(39, 43, 55, 0.24)",
        "active": "rgba(39, 43, 55, 0.28)"
    },
    "colorIconContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorIconContrastThemed": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorIconPositive": {
        "normal": "#0DC268",
        "hover": "#0CBB66",
        "active": "#0CB465"
    },
    "colorStrokeAccent": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorStrokeAccentThemed": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorStrokeContrast": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorStrokeNegative": {
        "normal": "#ED0A34",
        "hover": "#E40A34",
        "active": "#DA0A35"
    },
    "colorImageBorderAlpha": {
        "normal": "rgba(0, 16, 61, 0.08)",
        "hover": "rgba(0, 16, 61, 0.12)",
        "active": "rgba(0, 16, 61, 0.16)"
    },
    "colorFieldBorderAlpha": {
        "normal": "rgba(0, 16, 61, 0.12)",
        "hover": "rgba(0, 16, 61, 0.16)",
        "active": "rgba(0, 16, 61, 0.2)"
    },
    "colorSeparatorPrimaryAlpha": {
        "normal": "rgba(0, 16, 61, 0.12)",
        "hover": "rgba(0, 16, 61, 0.16)",
        "active": "rgba(0, 16, 61, 0.2)"
    },
    "colorSeparatorSecondary": {
        "normal": "#E6E7EB",
        "hover": "#DDDEE4",
        "active": "#D4D6DD"
    },
    "colorSeparatorPrimary": {
        "normal": "#DADCE0",
        "hover": "#D1D4D9",
        "active": "#C9CCD3"
    },
    "colorStrokePositive": {
        "normal": "#0DC268",
        "hover": "#0CBB66",
        "active": "#0CB465"
    },
    "colorAccentBlue": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorAccentGray": {
        "normal": "#A5A7AD",
        "hover": "#9EA1A9",
        "active": "#989BA4"
    },
    "colorAccentRed": {
        "normal": "#ED0A34",
        "hover": "#E40A34",
        "active": "#DA0A35"
    },
    "colorAccentGreen": {
        "normal": "#0DC268",
        "hover": "#0CBB66",
        "active": "#0CB465"
    },
    "colorAccentOrange": {
        "normal": "#FF9E00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "colorAccentPurple": {
        "normal": "#4F6DDC",
        "hover": "#4C69D6",
        "active": "#4966CF"
    },
    "colorAccentViolet": {
        "normal": "#C15DF3",
        "hover": "#B95AEC",
        "active": "#B257E4"
    },
    "colorAccentSecondary": {
        "normal": "#FF9E00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "colorActionSheetText": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorHeaderBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "colorPanelHeaderIcon": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorWriteBarInputBackground": {
        "normal": "#F0F1F3",
        "hover": "#E6E8EC",
        "active": "#DDDFE4"
    },
    "colorWriteBarInputBorderAlpha": {
        "normal": "rgba(0, 16, 61, 0.8)",
        "hover": "rgba(0, 16, 61, 0.84)",
        "active": "rgba(0, 16, 61, 0.88)"
    },
    "colorTrackBackground": {
        "normal": "#DADCE0",
        "hover": "#D1D4D9",
        "active": "#C9CCD3"
    },
    "colorTrackBuffer": {
        "normal": "#83AAEA",
        "hover": "#7EA4E3",
        "active": "#799EDC"
    },
    "colorImagePlaceholder": {
        "normal": "#E6E7EB",
        "hover": "#DDDEE4",
        "active": "#D4D6DD"
    },
    "colorImagePlaceholderAlpha": {
        "normal": "rgba(0, 16, 61, 0.8)",
        "hover": "rgba(0, 16, 61, 0.84)",
        "active": "rgba(0, 16, 61, 0.88)"
    },
    "colorSearchFieldBackground": {
        "normal": "#E6E7EB",
        "hover": "#DDDEE4",
        "active": "#D4D6DD"
    },
    "colorWriteBarIcon": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorSkeletonFrom": {
        "normal": "#F3F3F5",
        "hover": "#E9EAEE",
        "active": "#E0E1E6"
    },
    "colorSkeletonTo": {
        "normal": "#E0E1E6",
        "hover": "#D7D9DF",
        "active": "#CED0D8"
    },
    "colorAvatarOverlay": {
        "normal": "rgba(145, 147, 153, 0.48)",
        "hover": "rgba(145, 147, 153, 0.52)",
        "active": "rgba(145, 147, 153, 0.56)"
    },
    "colorOverlayPrimary": {
        "normal": "rgba(0, 0, 0, 0.48)",
        "hover": "rgba(0, 0, 0, 0.52)",
        "active": "rgba(0, 0, 0, 0.56)"
    },
    "colorTransparent": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.04)",
        "active": "rgba(0, 16, 61, 0.08)"
    },
    "colorRating": {
        "normal": "#ffd400",
        "hover": "#F5CC02",
        "active": "#EBC405"
    },
    "colorButtonContrastAlpha": {
        "normal": "rgba(255, 255, 255, 1)",
        "hover": "rgba(255, 255, 255, 0.8)",
        "active": "rgba(255, 255, 255, 0.6)"
    },
    "colorButtonContrast": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorThumbErrorBackgroundAlpha": {
        "normal": "rgba(237, 10, 52, 0.12)",
        "hover": "rgba(237, 10, 52, 0.16)",
        "active": "rgba(237, 10, 52, 0.2)"
    },
    "widthTouch": "(max-width: 767px)",
    "widthToTouch": "(max-width: 767px)",
    "widthFromTablet": "(min-width: 768px)",
    "widthTablet": "(min-width: 768px) and (max-width: 999px)",
    "widthToTablet": "(max-width: 999px)",
    "widthFromDesktopS": "(min-width: 1000px)",
    "widthDesktopS": "(min-width: 1000px) and (max-width: 1299px)",
    "widthToDesktopS": "(max-width: 1299px)",
    "widthFromDesktopM": "(min-width: 1300px)",
    "widthDesktopM": "(min-width: 1300px) and (max-width: 1599px)",
    "widthToDesktopM": "(max-width: 1599px)",
    "widthFromDesktopL": "(min-width: 1600px)",
    "widthDesktopL": "(min-width: 1600px) and (max-width: 2199px)",
    "widthToDesktopL": "(max-width: 2199px)",
    "widthFromDesktopXL": "(min-width: 2200px)",
    "widthDesktopXL": "(min-width: 2200px)",
    "themeType": "root"
};
exports.default = theme;
