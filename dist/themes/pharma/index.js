"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": "pharma",
    "fontFamilyAccent": "MailSans, Inter, Helvetica, Arial, sans-serif",
    "fontFamilyBase": "Inter, Helvetica, Arial, sans-serif",
    "fontWeightAccent1": 400,
    "fontWeightAccent2": 500,
    "fontWeightAccent3": 600,
    "fontWeightBase1": 400,
    "fontWeightBase2": 700,
    "fontWeightBase3": 700,
    "fontTitle1": {
        "regular": {
            "fontSize": 24,
            "lineHeight": 28,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontTitle2": {
        "regular": {
            "fontSize": 20,
            "lineHeight": 26,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontTitle3": {
        "regular": {
            "fontSize": 17,
            "lineHeight": 22,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontHeadline1": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontHeadline2": {
        "regular": {
            "fontSize": 14,
            "lineHeight": 20,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontText": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {
            "fontSize": 16,
            "lineHeight": 24
        }
    },
    "fontParagraph": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontSubhead": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 18,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {
            "fontSize": 14,
            "lineHeight": 18,
            "fontWeight": 400
        }
    },
    "fontFootnote": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 18,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {}
    },
    "fontFootnoteCaps": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 18,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.3px"
        },
        "compact": {}
    },
    "fontCaption1": {
        "regular": {
            "fontSize": 12,
            "lineHeight": 16,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {}
    },
    "fontCaption1Caps": {
        "regular": {
            "fontSize": 12,
            "lineHeight": 16,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.26px"
        },
        "compact": {}
    },
    "fontCaption2": {
        "regular": {
            "fontSize": 11,
            "lineHeight": 14,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {}
    },
    "fontCaption2Caps": {
        "regular": {
            "fontSize": 11,
            "lineHeight": 14,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.22px"
        },
        "compact": {}
    },
    "fontCaption3": {
        "regular": {
            "fontSize": 9,
            "lineHeight": 12,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {}
    },
    "fontCaption3Caps": {
        "regular": {
            "fontSize": 9,
            "lineHeight": 12,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400,
            "textTransform": "uppercase",
            "letterSpacing": "0.16px"
        },
        "compact": {}
    },
    "sizeSelectIconPadding": {
        "compactX": 7,
        "compact": 7,
        "regular": 6
    },
    "sizePopupBasePadding": {
        "compactX": 20,
        "regular": 32
    },
    "sizePopupHeaderPadding": {
        "compactX": 16,
        "regular": 24
    },
    "sizeBorderRadius": {
        "regular": 4
    },
    "sizeCheckBorderRadius": {
        "regular": 4
    },
    "sizeBorderRadiusPaper": {
        "regular": 4
    },
    "sizeBorderRadiusPromo": {
        "regular": 20
    },
    "sizeFieldHeight": {
        "regular": 48
    },
    "sizeButtonLargeHeight": {
        "regular": 48
    },
    "sizeButtonMediumHeight": {
        "regular": 40
    },
    "sizeButtonSmallHeight": {
        "regular": 36
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
        "regular": 20
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
        "compactX": 16,
        "compact": 16,
        "regular": 18
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
    "elevation3": "0 4px 20px 0 rgba(0,0,0,.16)",
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
            "breakpoint": 1004
        },
        "desktopM": {
            "adaptiveValue": "large",
            "breakpoint": 1260
        }
    },
    "fontH0": {
        "regular": {
            "fontSize": 28,
            "lineHeight": 32,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 600
        },
        "compact": {
            "fontSize": 44,
            "lineHeight": 52,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 600
        }
    },
    "fontH1": {
        "regular": {
            "fontSize": 36,
            "lineHeight": 48,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 28,
            "lineHeight": 36,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontH2": {
        "regular": {
            "fontSize": 28,
            "lineHeight": 34,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 24,
            "lineHeight": 32,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "sizeArrowHeight": {
        "regular": 8
    },
    "sizeArrowWidth": {
        "regular": 12
    },
    "sizeBasePadding": {
        "compactX": 16,
        "regular": 20
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
        "regular": 4
    },
    "sizeControlButtonWidthMin": {
        "compactX": 130,
        "compact": 130,
        "regular": 94
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
        "compactX": 288,
        "regular": 380
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
        "regular": 12
    },
    "sizeButtonIconPadding": {
        "regular": 20
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
        "compactX": 0,
        "compact": 0,
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
        "compactX": 16,
        "compact": 16,
        "regular": 20
    },
    "sizeFieldVerticalMargin": {
        "regular": 24
    },
    "sizeFieldSetMargin": {
        "regular": 32
    },
    "sizeIconMargin": {
        "regular": 8
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
        "compactX": 32,
        "compact": 32,
        "regular": 8
    },
    "sizeBulletMargin": {
        "regular": 12
    },
    "sizeAttributeMargin": {
        "regular": 4
    },
    "sizePopupMargin": {
        "compactX": 8,
        "compact": 8,
        "regular": 24
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
        "regular": 96
    },
    "sizeIllustrationL": {
        "regular": 144
    },
    "sizeIllustrationXXL": {
        "regular": 228
    },
    "toneValueOverlay": 0.48,
    "toneValueViewer": 0.88,
    "toneValueToolbar": 0.24,
    "toneValueHover": 0.04,
    "toneValueActive": 0.08,
    "toneValueFocus": 0.08,
    "typeBorderButton": "solid",
    "typeBorderPosition": "inset",
    "themeNameBase": "pharma",
    "prefix": "vkui",
    "fontFamilyArticle": "Georgia, serif",
    "fontWeightArticle1": 400,
    "fontWeightArticle2": 700,
    "mediaFontMediaHeader": {
        "regular": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 36,
            "lineHeight": 44,
            "letterSpacing": "-0.5%"
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 40,
            "lineHeight": 48,
            "letterSpacing": "-0.5%"
        }
    },
    "mediaFontMediaTitle1": {
        "regular": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 28,
            "lineHeight": 36
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 28,
            "lineHeight": 36
        }
    },
    "mediaFontMediaTitle2": {
        "regular": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 24,
            "lineHeight": 32
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 24,
            "lineHeight": 32
        }
    },
    "mediaFontMediaTitle3": {
        "regular": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 20,
            "lineHeight": 28
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 20,
            "lineHeight": 28
        }
    },
    "mediaFontMediaLead": {
        "regular": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 19,
            "lineHeight": 28
        },
        "compact": {
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500,
            "fontSize": 22,
            "lineHeight": 32,
            "letterSpacing": "-0.3%"
        }
    },
    "mediaFontMediaParagraph": {
        "regular": {
            "fontFamily": "Georgia, serif",
            "fontWeight": 400,
            "fontSize": 18,
            "lineHeight": 28
        },
        "compact": {
            "fontFamily": "Georgia, serif",
            "fontWeight": 400,
            "fontSize": 19,
            "lineHeight": 32
        }
    },
    "fontH3": {
        "regular": {
            "fontSize": 20,
            "lineHeight": 26,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontH4": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 22,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontLead": {
        "regular": {
            "fontSize": 19,
            "lineHeight": 30,
            "fontFamily": "Georgia, serif",
            "fontWeight": 400,
            "fontStyle": "italic"
        }
    },
    "fontArticleBody": {
        "regular": {
            "fontSize": 18,
            "lineHeight": 28,
            "fontFamily": "Georgia, serif",
            "fontWeight": 400
        }
    },
    "fontSpecificText": {
        "regular": {
            "fontSize": 18,
            "lineHeight": 28,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontSpecificFootnote": {
        "regular": {
            "fontSize": 14,
            "lineHeight": 22,
            "fontFamily": "Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 400
        }
    },
    "fontSpecificButton": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 24,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "gridContent": {
        "compactX": "100%",
        "compact": 580,
        "regular": 880,
        "large": 1180
    },
    "gridColumnX2": {
        "compactX": "100%",
        "compact": 280,
        "regular": 430,
        "large": 580
    },
    "gridColumnX3": {
        "compactX": "100%",
        "compact": 180,
        "regular": 280,
        "large": 380
    },
    "gridColumnX4": {
        "compactX": "100%",
        "compact": 130,
        "regular": 205,
        "large": 280
    },
    "gridColumnX6": {
        "compactX": "100%",
        "compact": 80,
        "regular": 130,
        "large": 180
    },
    "gridLayoutArticle": {
        "compactX": "100%",
        "compact": "100%",
        "regular": 540,
        "large": 540
    },
    "gridLayoutBanner": {
        "compactX": "100%",
        "compact": 280,
        "regular": 280,
        "large": 560
    },
    "fontHeadline": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "MailSans, Inter, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "colorsScheme": "light",
    "colorBackgroundAccent": {
        "normal": "#1DD3A2",
        "hover": "#1CCB9E",
        "active": "#1BC39A"
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
        "normal": "#1DD3A2",
        "hover": "#1CCB9E",
        "active": "#1BC39A"
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
        "normal": "#1DD3A2",
        "hover": "#1CCB9E",
        "active": "#1BC39A"
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
        "normal": "#1DD3A2",
        "hover": "#1CCB9E",
        "active": "#1BC39A"
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
    "colorPrimaryAuto": {
        "normal": "#ff4f00",
        "hover": "#F54C02",
        "active": "#EB4A05"
    },
    "colorPrimaryBase": {
        "normal": "#005ff9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "colorPrimaryDeti": {
        "normal": "#ca9cf4",
        "hover": "#C296ED",
        "active": "#BA91E5"
    },
    "colorPrimaryDobro": {
        "normal": "#ffd400",
        "hover": "#F5CC02",
        "active": "#EBC405"
    },
    "colorPrimaryHealth": {
        "normal": "#008079",
        "hover": "#007C77",
        "active": "#007774"
    },
    "colorPrimaryHealthNew": {
        "normal": "#3cd298",
        "hover": "#3ACA94",
        "active": "#37C291"
    },
    "colorPrimaryHitech": {
        "normal": "#5856d6",
        "hover": "#5453D0",
        "active": "#5150CA"
    },
    "colorPrimaryKino": {
        "normal": "#eaff00",
        "hover": "#E1F502",
        "active": "#D7EC05"
    },
    "colorPrimaryLady": {
        "normal": "#ff2d54",
        "hover": "#F52C53",
        "active": "#EB2B52"
    },
    "colorPrimaryMycom": {
        "normal": "#00abf2",
        "hover": "#00A5EB",
        "active": "#009FE4"
    },
    "colorPrimaryRealty": {
        "normal": "#4c8ebc",
        "hover": "#4989B7",
        "active": "#4684B2"
    },
    "colorPrimaryPharma": {
        "normal": "#1DD3A2",
        "hover": "#1CCB9E",
        "active": "#1BC39A"
    },
    "colorPrimaryPets": {
        "normal": "#fd696e",
        "hover": "#F3656C",
        "active": "#E9626A"
    },
    "colorSecondaryBase": {
        "normal": "#ff9e00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "colorSecondaryHealth": {
        "normal": "#fde953",
        "hover": "#F3E052",
        "active": "#E9D851"
    },
    "colorSecondaryMycom": {
        "normal": "#fc2c38",
        "hover": "#F22B38",
        "active": "#E82A38"
    },
    "colorSocialVk": {
        "normal": "#3F8AE0",
        "hover": "#3C85D9",
        "active": "#3A80D3"
    },
    "colorSocialOk": {
        "normal": "#ee8208",
        "hover": "#E47D0A",
        "active": "#DB790C"
    },
    "colorSocialFb": {
        "normal": "#1877f2",
        "hover": "#1773EB",
        "active": "#166FE4"
    },
    "colorSocialMir": {
        "normal": "#117eda",
        "hover": "#107AD4",
        "active": "#1075CD"
    },
    "colorSocialTwitter": {
        "normal": "#1da1f2",
        "hover": "#1C9BEB",
        "active": "#1B95E4"
    },
    "colorSocialBehance": {
        "normal": "#1769ff",
        "hover": "#1665F7",
        "active": "#1562EF"
    },
    "colorSocialDribbble": {
        "normal": "#ea4c89",
        "hover": "#E14A86",
        "active": "#D74783"
    },
    "colorSale": {
        "normal": "#eb1981",
        "hover": "#E2197E",
        "active": "#D8187C"
    },
    "widthTouch": "(max-width: 767px)",
    "widthToTouch": "(max-width: 767px)",
    "widthFromTablet": "(min-width: 768px)",
    "widthTablet": "(min-width: 768px) and (max-width: 1003px)",
    "widthToTablet": "(max-width: 1003px)",
    "widthFromDesktopS": "(min-width: 1004px)",
    "widthDesktopS": "(min-width: 1004px) and (max-width: 1259px)",
    "widthToDesktopS": "(max-width: 1259px)",
    "widthFromDesktopM": "(min-width: 1260px)",
    "widthDesktopM": "(min-width: 1260px)",
    "themeType": "root"
};
exports.default = theme;
