"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    "themeName": "octavius",
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
            "fontSize": 24,
            "lineHeight": 28,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
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
            "fontSize": 16,
            "lineHeight": 20,
            "fontFamily": "Helvetica, Arial, sans-serif",
            "fontWeight": 400
        },
        "compact": {
            "fontSize": 15,
            "lineHeight": 20
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
        "regular": 4
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
        "regular": 48,
        "compact": 48
    },
    "sizeButtonMediumHeight": {
        "regular": 48,
        "compact": 40
    },
    "sizeButtonSmallHeight": {
        "regular": 32,
        "compact": 32
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
        "regular": 20,
        "compact": 16
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
        "regular": 16
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
            "breakpoint": 0,
            "adaptiveValue": "regular"
        },
        "desktopS": {
            "breakpoint": 768,
            "adaptiveValue": "compact"
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
        "regular": {
            "fontSize": 24,
            "lineHeight": 28,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 32,
            "lineHeight": 36
        }
    },
    "fontH2": {
        "regular": {
            "fontSize": 20,
            "lineHeight": 26,
            "fontFamily": "MailSans, Helvetica, Arial, sans-serif",
            "fontWeight": 500
        },
        "compact": {
            "fontSize": 28,
            "lineHeight": 32
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
        "regular": 130,
        "compact": 104
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
    "themeNameBase": "octavius",
    "octaviusShadowSidebarItemText": "none",
    "octaviusShadowSidebarItemIcon": "none",
    "octaviusElevationCard": "none",
    "octaviusShadowEmptyStateText": "none",
    "octaviusElevationHeader": "none",
    "octaviusTextShadowEmptyStateText": "none",
    "octaviusPositionBackground": "50% 0",
    "octaviusImageOverlayBackground": "none",
    "octaviusTextShadowSidebarItemText": "none",
    "octaviusFilterSidebarItemIcon": "none",
    "octaviusImageBackground": "none",
    "octaviusFontFamilyDefault": "HelveticaNeue, Helvetica, Arial, sans-serif",
    "octaviusFontFamilyMailSans": "MailSans, HelveticaNeue, Helvetica, Arial, sans-serif",
    "octaviusFontFamilyGlobal": "Arial, Tahoma, Verdana, sans-serif",
    "octaviusFontFamilyMac": "Helvetica, Arial, Tahoma, Verdana, sans-serif",
    "octaviusFontFamilyDisplay": "inherit",
    "octaviusColorLetterAttachListBackground": "linear-gradient(270deg,#fff 22.77%,rgba(255,255,255,0) 104.46%)",
    "octaviusSizeHeadlineHeight": {
        "regular": 36
    },
    "octaviusSizeLayoutWidthMax": {
        "regular": 2150
    },
    "octaviusSizeLayoutWidthMin": {
        "regular": 761
    },
    "octaviusSizeSidebarPaddingTop": {
        "regular": 12
    },
    "octaviusSizeSidebarWidgetsHeightMin": {
        "regular": 64
    },
    "octaviusSizeSidebarWidgetsHeightCompactMin": {
        "regular": 104
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
    "colorBackgroundThumbnail": {
        "normal": "#EBECEF",
        "hover": "#E2E3E8",
        "active": "#D8DAE1"
    },
    "colorBackgroundThumbnailAlpha": {
        "normal": "rgba(0, 16, 61, 0.08)",
        "hover": "rgba(0, 16, 61, 0.12)",
        "active": "rgba(0, 16, 61, 0.16)"
    },
    "colorPaletteRed1": {
        "normal": "#fc2c38",
        "hover": "#F22B38",
        "active": "#E82A38"
    },
    "colorPaletteRed2": {
        "normal": "#eb1981",
        "hover": "#E2197E",
        "active": "#D8187C"
    },
    "colorPaletteRed3": {
        "normal": "#ff71bb",
        "hover": "#F56DB6",
        "active": "#EB69B1"
    },
    "colorPaletteOrange1": {
        "normal": "#ff8b2e",
        "hover": "#F5862F",
        "active": "#EB812F"
    },
    "colorPaletteOrange1Alpha": {
        "normal": "rgba(255, 158, 0, 0.12)",
        "hover": "rgba(255, 158, 0, 0.16)",
        "active": "rgba(255, 158, 0, 0.2)"
    },
    "colorPaletteYellow1": {
        "normal": "#ffc311",
        "hover": "#F5BC13",
        "active": "#EBB515"
    },
    "colorPaletteGreen1": {
        "normal": "#aee113",
        "hover": "#A7D915",
        "active": "#A0D016"
    },
    "colorPaletteGreen2": {
        "normal": "#59c354",
        "hover": "#55BC53",
        "active": "#52B552"
    },
    "colorPaletteGreen3": {
        "normal": "#37eb94",
        "hover": "#35E291",
        "active": "#33D98D"
    },
    "colorPaletteGreen4": {
        "normal": "#00b1b3",
        "hover": "#00ABAE",
        "active": "#00A4AA"
    },
    "colorPaletteGreen1Alpha": {
        "normal": "rgba(92, 186, 56, 0.12)",
        "hover": "rgba(92, 186, 56, 0.16)",
        "active": "rgba(92, 186, 56, 0.2)"
    },
    "colorPaletteGreen2Alpha": {
        "normal": "rgba(0, 230, 180, 0.08)",
        "hover": "rgba(0, 230, 180, 0.12)",
        "active": "rgba(0, 230, 180, 0.16)"
    },
    "colorPaletteBlue1": {
        "normal": "#2951ff",
        "hover": "#274EF7",
        "active": "#264CEF"
    },
    "colorPaletteBlue2": {
        "normal": "#00abf2",
        "hover": "#00A5EB",
        "active": "#009FE4"
    },
    "colorPaletteBlue3": {
        "normal": "#26dfdf",
        "hover": "#24D7D9",
        "active": "#23CED2"
    },
    "colorPaletteBlue1Alpha": {
        "normal": "rgba(0, 95, 249, 0.12)",
        "hover": "rgba(0, 95, 249, 0.16)",
        "active": "rgba(0, 95, 249, 0.2)"
    },
    "colorPaletteViolet1": {
        "normal": "#6c00ff",
        "hover": "#6801F7",
        "active": "#6301EF"
    },
    "colorPaletteViolet2": {
        "normal": "#ae73ff",
        "hover": "#A76FF7",
        "active": "#A06BEF"
    },
    "colorAlert": {
        "normal": "#c1341b",
        "hover": "#B9331C",
        "active": "#B2311E"
    },
    "octaviusColorPlaceholderBackground": {
        "normal": "#ffffff",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorPromoBackground": {
        "normal": "#EBEEF5",
        "hover": "#E2E5EE",
        "active": "#D8DCE6"
    },
    "octaviusColorThreadFooterBackground": {
        "normal": "#ebecef",
        "hover": "#E2E3E8",
        "active": "#D8DAE1"
    },
    "octaviusColorButtonText": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorButtonIcon": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorButtonBackgroundAlpha": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.04)",
        "active": "rgba(0, 16, 61, 0.08)"
    },
    "octaviusColorBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorBackgroundAccentTonedAlpha": {
        "normal": "rgba(0, 95, 249, 0.12)",
        "hover": "rgba(0, 95, 249, 0.16)",
        "active": "rgba(0, 95, 249, 0.2)"
    },
    "octaviusColorOverlayBackground": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.04)",
        "active": "rgba(0, 16, 61, 0.08)"
    },
    "octaviusColorHeaderBackground": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "octaviusColorHeaderButtonText": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderButtonBackgroundAlpha": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.12)",
        "active": "rgba(0, 16, 61, 0.24)"
    },
    "octaviusColorHeaderIcon": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderIconUnread": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderIconFavorite": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderIconAttach": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderTextSecondary": {
        "normal": "#93969b",
        "hover": "#8D9197",
        "active": "#878B93"
    },
    "octaviusColorHeaderSearchIcon": {
        "normal": "#b6b8be",
        "hover": "#AFB1B9",
        "active": "#A7ABB4"
    },
    "octaviusColorHeaderSearchChipBackground": {
        "normal": "#F0F1F3",
        "hover": "#E6E8EC",
        "active": "#DDDFE4"
    },
    "octaviusColorHeaderSearchChipBackgroundEditable": {
        "normal": "#ffffff",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderSearchChipBorderEditableAlpha": {
        "normal": "rgba(0, 16, 61, 0.12)",
        "hover": "rgba(0, 16, 61, 0.16)",
        "active": "rgba(0, 16, 61, 0.2)"
    },
    "octaviusColorHeaderSearchBackground": {
        "normal": "#ffffff",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderSearchBackgroundCollapsed": {
        "normal": "#ffffff",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorHeaderSearchText": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorHeaderSearchTextCollapsed": {
        "normal": "#87898F",
        "hover": "#82848C",
        "active": "#7C7F88"
    },
    "octaviusColorHeaderFilterTextAlpha": {
        "normal": "rgba(255, 255, 255, .48)",
        "hover": "rgba(255, 255, 255, 0.52)",
        "active": "rgba(255, 255, 255, 0.56)"
    },
    "octaviusColorHeaderProgress": {
        "normal": "#FF9E00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "octaviusColorPortalMenuBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorSidebarItemIconActive": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarItemIconPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarItemTextActive": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarItemTextPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarButtonIcon": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarButtonText": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarButtonBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorSidebarCounterBackgroundAlpha": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.04)",
        "active": "rgba(0, 16, 61, 0.08)"
    },
    "octaviusColorSidebarCounterText": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarItemBackgroundAlpha": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.04)",
        "active": "rgba(0, 16, 61, 0.08)"
    },
    "octaviusColorSidebarScrollbarAlpha": {
        "normal": "rgba(0, 16, 61, 0.08)",
        "hover": "rgba(0, 16, 61, 0.12)",
        "active": "rgba(0, 16, 61, 0.16)"
    },
    "octaviusColorSidebarItemIcon": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorSidebarItemText": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorSidebarItemButtonBackgroundAlpha": {
        "normal": "rgba(0, 16, 61, 0.08)",
        "hover": "rgba(0, 16, 61, 0.12)",
        "active": "rgba(0, 16, 61, 0.16)"
    },
    "octaviusColorSidebarItemIconSecondary": {
        "normal": "#87898F",
        "hover": "#82848C",
        "active": "#7C7F88"
    },
    "octaviusColorSidebarItemTextSecondary": {
        "normal": "#87898F",
        "hover": "#82848C",
        "active": "#7C7F88"
    },
    "octaviusColorSidebarShortItemIcon": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorSidebarShortItemText": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorSidebarShortItemTextActive": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarShortItemIconActive": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarShortItemIconSecondary": {
        "normal": "#A5A7AD",
        "hover": "#9EA1A9",
        "active": "#989BA4"
    },
    "octaviusColorSidebarShortItemTextSecondary": {
        "normal": "#87898F",
        "hover": "#82848C",
        "active": "#7C7F88"
    },
    "octaviusColorSidebarComposeButtonBackground": {
        "normal": "#ffffff",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorSidebarComposeButtonText": {
        "normal": "#2c2d2e",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorSidebarComposeButtonIcon": {
        "normal": "#2c2d2e",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorContentScrollbarAlpha": {
        "normal": "rgba(0, 16, 61, 0.08)",
        "hover": "rgba(0, 16, 61, 0.12)",
        "active": "rgba(0, 16, 61, 0.16)"
    },
    "octaviusColorIconUnread": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "octaviusColorIconFavorite": {
        "normal": "#fc2c38",
        "hover": "#F22B38",
        "active": "#E82A38"
    },
    "octaviusColorIconOrder": {
        "normal": "#ff54aa",
        "hover": "#F551A6",
        "active": "#EB4FA1"
    },
    "octaviusColorIconFinance": {
        "normal": "#2fc885",
        "hover": "#2DC182",
        "active": "#2BB97F"
    },
    "octaviusColorIconRegistration": {
        "normal": "#ff9e00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "octaviusColorIconTravel": {
        "normal": "#ba34fc",
        "hover": "#B333F4",
        "active": "#AB31ED"
    },
    "octaviusColorIconEvent": {
        "normal": "#09a6fa",
        "hover": "#09A0F2",
        "active": "#089AEB"
    },
    "octaviusColorIconFees": {
        "normal": "#e60000",
        "hover": "#DD0102",
        "active": "#D40105"
    },
    "octaviusColorIconEventAlpha": {
        "normal": "rgba(59, 186, 254, 0.1)",
        "hover": "rgba(59, 186, 254, 0.14)",
        "active": "rgba(59, 186, 254, 0.18)"
    },
    "octaviusColorIconOrderAlpha": {
        "normal": "rgba(249, 76, 163, 0.1)",
        "hover": "rgba(249, 76, 163, 0.14)",
        "active": "rgba(249, 76, 163, 0.18)"
    },
    "octaviusColorIconTravelAlpha": {
        "normal": "rgba(193, 93, 243, 0.1)",
        "hover": "rgba(193, 93, 243, 0.14)",
        "active": "rgba(193, 93, 243, 0.18)"
    },
    "octaviusColorSidebarIconUnread": {
        "normal": "#005FF9",
        "hover": "#005CF1",
        "active": "#0059EA"
    },
    "octaviusColorSidebarIconFavorite": {
        "normal": "#fc2c38",
        "hover": "#F22B38",
        "active": "#E82A38"
    },
    "octaviusColorSidebarIconOrder": {
        "normal": "#ff54aa",
        "hover": "#F551A6",
        "active": "#EB4FA1"
    },
    "octaviusColorSidebarIconFinance": {
        "normal": "#2fc885",
        "hover": "#2DC182",
        "active": "#2BB97F"
    },
    "octaviusColorSidebarIconRegistration": {
        "normal": "#ff9e00",
        "hover": "#F59802",
        "active": "#EB9305"
    },
    "octaviusColorSidebarIconTravel": {
        "normal": "#ba34fc",
        "hover": "#B333F4",
        "active": "#AB31ED"
    },
    "octaviusColorSidebarIconEvent": {
        "normal": "#09a6fa",
        "hover": "#09A0F2",
        "active": "#089AEB"
    },
    "octaviusColorSidebarIconFees": {
        "normal": "#e60000",
        "hover": "#DD0102",
        "active": "#D40105"
    },
    "octaviusColorListLetterBackground": {
        "normal": "#ffffff",
        "hover": "#f5f5f7",
        "active": "#ebecef"
    },
    "octaviusColorListTextUnread": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorListTextPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorListIconPrimary": {
        "normal": "#2C2D2E",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorListLetterSeparatorAlpha": {
        "normal": "rgba(0, 16, 61, 0.12)",
        "hover": "rgba(0, 16, 61, 0.16)",
        "active": "rgba(0, 16, 61, 0.2)"
    },
    "octaviusColorListLetterAdvBackground": {
        "normal": "#F0F5FF",
        "hover": "#E6ECF7",
        "active": "#DDE3EF"
    },
    "octaviusColorListBackgroundPositiveAlpha": {
        "normal": "rgba(13, 194, 104, 0.08)",
        "hover": "rgba(13, 194, 104, 0.12)",
        "active": "rgba(13, 194, 104, 0.16)"
    },
    "octaviusColorLetterListTextUnread": {
        "normal": "#2c2d2e",
        "hover": "#2A2C2F",
        "active": "#282B2F"
    },
    "octaviusColorDatasetBackground": {
        "normal": "#FFFFFF",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusColorEmptyStateText": {
        "normal": "#333333",
        "hover": "#313233",
        "active": "#2F3034"
    },
    "octaviusColorLayoutBorderAlpha": {
        "normal": "rgba(0, 16, 61, 0.12)",
        "hover": "rgba(0, 16, 61, 0.16)",
        "active": "rgba(0, 16, 61, 0.2)"
    },
    "octaviusColorLayoutLetterBorderAlpha": {
        "normal": "rgba(0, 16, 61, 0.12)",
        "hover": "rgba(0, 16, 61, 0.16)",
        "active": "rgba(0, 16, 61, 0.2)"
    },
    "octaviusColorEmptyStateTextLink": {
        "normal": "#005bd1",
        "hover": "#0058CB",
        "active": "#0055C5"
    },
    "octaviusColorLetterContactBackgroundAlpha": {
        "normal": "transparent",
        "hover": "rgba(0, 16, 61, 0.08)",
        "active": "rgba(0, 16, 61, 0.16)"
    },
    "octaviusColorLetterPreviewBackgroundPrimary": {
        "normal": "#F9F9FA",
        "hover": "#EFF0F2",
        "active": "#E5E6EB"
    },
    "octaviusColorLetterPreviewBackgroundSecondary": {
        "normal": "#F3F3F5",
        "hover": "#E9EAEE",
        "active": "#E0E1E6"
    },
    "octaviusColorNotificationBorder": {
        "normal": "#ffffff",
        "hover": "#F5F5F7",
        "active": "#EBECEF"
    },
    "octaviusTextDecorationEmptyStateTextLink": {
        "normal": "none",
        "hover": "underline",
        "active": "underline"
    },
    "widthTouch": "(max-width: 767px)",
    "widthToTouch": "(max-width: 767px)",
    "widthFromDesktopS": "(min-width: 768px)",
    "widthDesktopS": "(min-width: 768px)",
    "themeType": "root"
};
exports.default = theme;
