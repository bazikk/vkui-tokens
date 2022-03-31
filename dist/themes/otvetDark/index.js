"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": "otvetDark",
    "fontFamilyAccent": "MailSans, Helvetica, Arial, sans-serif",
    "fontFamilyBase": "Helvetica, Arial, sans-serif",
    "fontWeightAccent1": 500,
    "fontWeightAccent2": 500,
    "fontWeightAccent3": 400,
    "fontWeightBase1": 700,
    "fontWeightBase2": 700,
    "fontWeightBase3": 400,
    "fontTitle1": {
        "regular": {
            "fontSize": 20,
            "lineHeight": "28px",
            "fontWeight": 700,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "marginBottom": 12
        }
    },
    "fontTitle2": {
        "regular": {
            "fontSize": 17,
            "lineHeight": "24px",
            "fontWeight": 700,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "marginBottom": 12
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
        }
    },
    "fontHeadline2": {
        "regular": {
            "fontSize": 15,
            "lineHeight": 20,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        }
    },
    "fontText": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
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
        }
    },
    "fontFootnote": {
        "regular": {
            "fontSize": 13,
            "lineHeight": 18,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
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
        "regular": 7
    },
    "sizePopupBasePadding": {
        "regular": 20
    },
    "sizePopupHeaderPadding": {
        "regular": 16
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
        "regular": 40
    },
    "sizeButtonLargeHeight": {
        "regular": 48
    },
    "sizeButtonMediumHeight": {
        "regular": 48
    },
    "sizeButtonSmallHeight": {
        "regular": 32
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
        "desktopS": {
            "breakpoint": 0,
            "adaptiveValue": "regular"
        }
    },
    "fontH0": {
        "regular": {
            "fontSize": 44,
            "lineHeight": "52px",
            "fontWeight": 700,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "marginBottom": 20
        }
    },
    "fontH1": {
        "regular": {
            "fontSize": 32,
            "lineHeight": "40px",
            "fontWeight": 700,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "marginBottom": 16
        }
    },
    "fontH2": {
        "regular": {
            "fontSize": 24,
            "lineHeight": "32px",
            "fontWeight": 700,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "marginBottom": 12
        }
    },
    "sizeArrowHeight": {
        "regular": 8
    },
    "sizeArrowWidth": {
        "regular": 12
    },
    "sizeBasePadding": {
        "regular": 16
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
        "regular": 130
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
        "regular": 328
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
        "regular": 16
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
        "regular": 12
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
        "regular": 8
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
    "themeNameBase": "otvet",
    "fontHeadline": {
        "regular": {
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
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
        "normal": "#191919",
        "hover": "#2B2B2B",
        "active": "#2B2B2B"
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
        "normal": "#B4B4B4",
        "hover": "#B7B7B7",
        "active": "#BABABA"
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
        "normal": "#5F5F5F",
        "hover": "#656565",
        "active": "#6C6C6C"
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
        "normal": "transparent",
        "hover": "transparent",
        "active": "transparent"
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
        "normal": "#1B1B1B",
        "hover": "#1F1F1F",
        "active": "#222222"
    },
    "colorThumbErrorBackgroundAlpha": {
        "normal": "rgba(237, 10, 52, 0.12)",
        "hover": "rgba(237, 10, 52, 0.16)",
        "active": "rgba(237, 10, 52, 0.2)"
    },
    "themeType": "root"
};
exports.default = theme;
