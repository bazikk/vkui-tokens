"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": "mediaDark",
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
    "themeNameBase": "media",
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
    "colorsScheme": "dark",
    "colorBackgroundAccent": {
        "normal": "#2775FC",
        "hover": "#307BFC",
        "active": "#3880FC"
    },
    "colorBackgroundAccentThemed": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorBackgroundAccentAlternative": {
        "normal": "#FF9E00",
        "hover": "#FFA20A",
        "active": "#FFA614"
    },
    "colorBackgroundContent": {
        "normal": "#232324",
        "hover": "#2C2C2D",
        "active": "#353536"
    },
    "colorBackgroundSecondary": {
        "normal": "#2A2A2B",
        "hover": "#333333",
        "active": "#3B3B3C"
    },
    "colorBackgroundSecondaryAlpha": {
        "normal": "rgba(255, 255, 255, 0.08)",
        "hover": "rgba(255, 255, 255, 0.16)",
        "active": "rgba(255, 255, 255, 0.2)"
    },
    "colorBackground": {
        "normal": "#19191A",
        "hover": "#222223",
        "active": "#2B2B2C"
    },
    "colorBackgroundContrast": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorBackgroundContrastSecondaryAlpha": {
        "normal": "rgba(255, 255, 255, 0.20)",
        "hover": "rgba(255, 255, 255, 0.24)",
        "active": "rgba(255, 255, 255, 0.28)"
    },
    "colorBackgroundWarning": {
        "normal": "#6C4E00",
        "hover": "#72550A",
        "active": "#785C14"
    },
    "colorBackgroundNegative": {
        "normal": "#ED0A34",
        "hover": "#EE143C",
        "active": "#EE1E44"
    },
    "colorBackgroundTertiary": {
        "normal": "#252525",
        "hover": "#2E2E2E",
        "active": "#363636"
    },
    "colorBackgroundModal": {
        "normal": "#303030",
        "hover": "#383838",
        "active": "#414141"
    },
    "colorBackgroundPositive": {
        "normal": "#0DC268",
        "hover": "#17C46E",
        "active": "#20C774"
    },
    "colorBackgroundNegativeTint": {
        "normal": "#522e2e",
        "hover": "#593636",
        "active": "#603F3F"
    },
    "colorTextAccent": {
        "normal": "#3C82FD",
        "hover": "#4487FD",
        "active": "#4C8CFD"
    },
    "colorTextAccentThemed": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorTextNegative": {
        "normal": "#ED0A34",
        "hover": "#EE143C",
        "active": "#EE1E44"
    },
    "colorTextLink": {
        "normal": "#589BFF",
        "hover": "#5F9FFF",
        "active": "#65A3FF"
    },
    "colorTextLinkThemed": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorTextMuted": {
        "normal": "#E7E8EA",
        "hover": "#E8E9EB",
        "active": "#E9EAEC"
    },
    "colorTextPrimary": {
        "normal": "#E7E8EA",
        "hover": "#E8E9EB",
        "active": "#E9EAEC"
    },
    "colorTextPrimaryInvariably": {
        "normal": "#2C2D2E",
        "hover": "#343536",
        "active": "#3D3E3F"
    },
    "colorTextSecondary": {
        "normal": "#8C8E94",
        "hover": "#919398",
        "active": "#95979D"
    },
    "colorTextSubhead": {
        "normal": "#BFC1C5",
        "hover": "#C2C3C7",
        "active": "#C4C6CA"
    },
    "colorTextTertiary": {
        "normal": "#74767A",
        "hover": "#7A7B7F",
        "active": "#7F8185"
    },
    "colorTextLinkVisited": {
        "normal": "#528FDF",
        "hover": "#5993E0",
        "active": "#6098E2"
    },
    "colorTextContrast": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorTextContrastThemed": {
        "normal": "#2C2D2E",
        "hover": "#343536",
        "active": "#3D3E3F"
    },
    "colorLinkContrast": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorTextPositive": {
        "normal": "#0DC268",
        "hover": "#17C46E",
        "active": "#20C774"
    },
    "colorIconAccent": {
        "normal": "#3C82FD",
        "hover": "#4487FD",
        "active": "#4C8CFD"
    },
    "colorIconNegative": {
        "normal": "#ED0A34",
        "hover": "#EE143C",
        "active": "#EE1E44"
    },
    "colorIconPrimary": {
        "normal": "#D9DADD",
        "hover": "#DBDBDE",
        "active": "#DCDDE0"
    },
    "colorIconPrimaryInvariably": {
        "normal": "#2C2D2E",
        "hover": "#343536",
        "active": "#3D3E3F"
    },
    "colorIconMedium": {
        "normal": "#B0B1B6",
        "hover": "#B3B4B9",
        "active": "#B6B7BC"
    },
    "colorIconMediumAlpha": {
        "normal": "rgba(245, 246, 255, 0.7)",
        "hover": "rgba(245, 246, 255, 0.74)",
        "active": "rgba(245, 246, 255, 0.78)"
    },
    "colorIconSecondary": {
        "normal": "#9C9DA2",
        "hover": "#A0A1A6",
        "active": "#A4A5A9"
    },
    "colorIconSecondaryAlpha": {
        "normal": "rgba(245, 246, 255, 0.6)",
        "hover": "rgba(245, 246, 255, 0.64)",
        "active": "rgba(245, 246, 255, 0.68)"
    },
    "colorIconTertiary": {
        "normal": "#83848A",
        "hover": "#88898F",
        "active": "#8D8E93"
    },
    "colorIconTertiaryAlpha": {
        "normal": "rgba(245, 246, 255, 0.5)",
        "hover": "rgba(245, 246, 255, 0.54)",
        "active": "rgba(245, 246, 255, 0.58)"
    },
    "colorIconContrast": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorIconContrastThemed": {
        "normal": "#2C2D2E",
        "hover": "#343536",
        "active": "#3D3E3F"
    },
    "colorIconPositive": {
        "normal": "#0DC268",
        "hover": "#17C46E",
        "active": "#20C774"
    },
    "colorStrokeAccent": {
        "normal": "#3C82FD",
        "hover": "#4487FD",
        "active": "#4C8CFD"
    },
    "colorStrokeAccentThemed": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorStrokeContrast": {
        "normal": "#FFFFFF",
        "hover": "#FFFFFF",
        "active": "#FFFFFF"
    },
    "colorStrokeNegative": {
        "normal": "#ED0A34",
        "hover": "#EE143C",
        "active": "#EE1E44"
    },
    "colorImageBorderAlpha": {
        "normal": "rgba(255, 255, 255, 0.08)",
        "hover": "rgba(255, 255, 255, 0.12)",
        "active": "rgba(255, 255, 255, 0.16)"
    },
    "colorFieldBorderAlpha": {
        "normal": "rgba(255, 255, 255, 0.16)",
        "hover": "rgba(255, 255, 255, 0.2)",
        "active": "rgba(255, 255, 255, 0.24)"
    },
    "colorSeparatorPrimaryAlpha": {
        "normal": "rgba(0, 0, 0, 0.4)",
        "hover": "rgba(0, 0, 0, 0.44)",
        "active": "rgba(0, 0, 0, 0.48)"
    },
    "colorSeparatorSecondary": {
        "normal": "#181818",
        "hover": "#212121",
        "active": "#2A2A2A"
    },
    "colorSeparatorPrimary": {
        "normal": "#151516",
        "hover": "#1E1E1F",
        "active": "#282829"
    },
    "colorStrokePositive": {
        "normal": "#0DC268",
        "hover": "#17C46E",
        "active": "#20C774"
    },
    "colorAccentBlue": {
        "normal": "#2775FC",
        "hover": "#307BFC",
        "active": "#3880FC"
    },
    "colorAccentGray": {
        "normal": "#9C9DA2",
        "hover": "#A0A1A6",
        "active": "#A4A5A9"
    },
    "colorAccentRed": {
        "normal": "#ED0A34",
        "hover": "#EE143C",
        "active": "#EE1E44"
    },
    "colorAccentGreen": {
        "normal": "#0DC268",
        "hover": "#17C46E",
        "active": "#20C774"
    },
    "colorAccentOrange": {
        "normal": "#FF9E00",
        "hover": "#FFA20A",
        "active": "#FFA614"
    },
    "colorAccentPurple": {
        "normal": "#4F6DDC",
        "hover": "#5673DD",
        "active": "#5D79DF"
    },
    "colorAccentViolet": {
        "normal": "#C15DF3",
        "hover": "#C363F3",
        "active": "#C66AF4"
    },
    "colorAccentSecondary": {
        "normal": "#FF9E00",
        "hover": "#FFA20A",
        "active": "#FFA614"
    },
    "colorActionSheetText": {
        "normal": "#3C82FD",
        "hover": "#4487FD",
        "active": "#4C8CFD"
    },
    "colorHeaderBackground": {
        "normal": "#232324",
        "hover": "#2C2C2D",
        "active": "#353536"
    },
    "colorPanelHeaderIcon": {
        "normal": "#3C82FD",
        "hover": "#4487FD",
        "active": "#4C8CFD"
    },
    "colorWriteBarInputBackground": {
        "normal": "#2A2A2B",
        "hover": "#333333",
        "active": "#3B3B3C"
    },
    "colorWriteBarInputBorderAlpha": {
        "normal": "rgba(255, 255, 255, 0.8)",
        "hover": "rgba(255, 255, 255, 0.84)",
        "active": "rgba(255, 255, 255, 0.88)"
    },
    "colorTrackBackground": {
        "normal": "#434445",
        "hover": "#4B4B4C",
        "active": "#525354"
    },
    "colorTrackBuffer": {
        "normal": "#83AAEA",
        "hover": "#88ADEB",
        "active": "#8DB1EC"
    },
    "colorImagePlaceholder": {
        "normal": "#393A3B",
        "hover": "#414243",
        "active": "#494A4B"
    },
    "colorImagePlaceholderAlpha": {
        "normal": "rgba(255, 255, 255, 0.8)",
        "hover": "rgba(255, 255, 255, 0.84)",
        "active": "rgba(255, 255, 255, 0.88)"
    },
    "colorSearchFieldBackground": {
        "normal": "#393A3B",
        "hover": "#414243",
        "active": "#494A4B"
    },
    "colorWriteBarIcon": {
        "normal": "#3C82FD",
        "hover": "#4487FD",
        "active": "#4C8CFD"
    },
    "colorSkeletonFrom": {
        "normal": "#2A2A2B",
        "hover": "#333333",
        "active": "#3B3B3C"
    },
    "colorSkeletonTo": {
        "normal": "#3E3F40",
        "hover": "#464748",
        "active": "#4D4E4F"
    },
    "colorAvatarOverlay": {
        "normal": "rgba(176, 178, 182, 0.48)",
        "hover": "rgba(176, 178, 182, 0.52)",
        "active": "rgba(176, 178, 182, 0.56)"
    },
    "colorOverlayPrimary": {
        "normal": "rgba(0, 0, 0, 0.48)",
        "hover": "rgba(0, 0, 0, 0.52)",
        "active": "rgba(0, 0, 0, 0.56)"
    },
    "colorTransparent": {
        "normal": "transparent",
        "hover": "rgba(255, 255, 255, 0.04)",
        "active": "rgba(255, 255, 255, 0.08)"
    },
    "colorRating": {
        "normal": "#ffd400",
        "hover": "#FFD60A",
        "active": "#FFD714"
    },
    "colorButtonContrastAlpha": {
        "normal": "rgba(255, 255, 255, 0.12)",
        "hover": "rgba(255, 255, 255, 0.2)",
        "active": "rgba(255, 255, 255, 0.24)"
    },
    "colorButtonContrast": {
        "normal": "#252526",
        "hover": "#29292A",
        "active": "#2C2C2D"
    },
    "colorThumbErrorBackgroundAlpha": {
        "normal": "rgba(237, 10, 52, 0.12)",
        "hover": "rgba(237, 10, 52, 0.16)",
        "active": "rgba(237, 10, 52, 0.2)"
    },
    "colorPrimaryAuto": {
        "normal": "#ff4f00",
        "hover": "#FF560A",
        "active": "#FF5D14"
    },
    "colorPrimaryBase": {
        "normal": "#005ff9",
        "hover": "#0A65F9",
        "active": "#146CF9"
    },
    "colorPrimaryDeti": {
        "normal": "#ca9cf4",
        "hover": "#CCA0F4",
        "active": "#CEA4F5"
    },
    "colorPrimaryDobro": {
        "normal": "#ffd400",
        "hover": "#FFD60A",
        "active": "#FFD714"
    },
    "colorPrimaryHealth": {
        "normal": "#008079",
        "hover": "#0A857E",
        "active": "#148A84"
    },
    "colorPrimaryHealthNew": {
        "normal": "#3cd298",
        "hover": "#44D49C",
        "active": "#4CD6A0"
    },
    "colorPrimaryHitech": {
        "normal": "#5856d6",
        "hover": "#5F5DD8",
        "active": "#6564D9"
    },
    "colorPrimaryKino": {
        "normal": "#eaff00",
        "hover": "#EBFF0A",
        "active": "#ECFF14"
    },
    "colorPrimaryLady": {
        "normal": "#ff2d54",
        "hover": "#FF355B",
        "active": "#FF3E62"
    },
    "colorPrimaryMycom": {
        "normal": "#00abf2",
        "hover": "#0AAEF3",
        "active": "#14B2F3"
    },
    "colorPrimaryRealty": {
        "normal": "#4c8ebc",
        "hover": "#5393BF",
        "active": "#5A97C1"
    },
    "colorPrimaryPharma": {
        "normal": "#1DD3A2",
        "hover": "#26D5A6",
        "active": "#2FD7A9"
    },
    "colorPrimaryPets": {
        "normal": "#fd696e",
        "hover": "#FD6F74",
        "active": "#FD757A"
    },
    "colorSecondaryBase": {
        "normal": "#ff9e00",
        "hover": "#FFA20A",
        "active": "#FFA614"
    },
    "colorSecondaryHealth": {
        "normal": "#fde953",
        "hover": "#FDEA5A",
        "active": "#FDEB61"
    },
    "colorSecondaryMycom": {
        "normal": "#fc2c38",
        "hover": "#FC3440",
        "active": "#FC3D48"
    },
    "colorSocialVk": {
        "normal": "#3F8AE0",
        "hover": "#478FE1",
        "active": "#4E93E2"
    },
    "colorSocialOk": {
        "normal": "#ee8208",
        "hover": "#EF8712",
        "active": "#EF8C1C"
    },
    "colorSocialFb": {
        "normal": "#1877f2",
        "hover": "#217CF3",
        "active": "#2A82F3"
    },
    "colorSocialMir": {
        "normal": "#117eda",
        "hover": "#1B83DB",
        "active": "#2488DD"
    },
    "colorSocialTwitter": {
        "normal": "#1da1f2",
        "hover": "#26A5F3",
        "active": "#2FA9F3"
    },
    "colorSocialBehance": {
        "normal": "#1769ff",
        "hover": "#206FFF",
        "active": "#2A75FF"
    },
    "colorSocialDribbble": {
        "normal": "#ea4c89",
        "hover": "#EB538E",
        "active": "#EC5A92"
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
