"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeclarationVarColorsObject = exports.getDeclarationVarColorsString = void 0;
function getDeclarationVarColorsString() {
    return "--vkui--color_background_accent: #529EF4;--vkui--color_background_accent--hover: #59A2F4;--vkui--color_background_accent--active: #60A6F5;--vkui--color_background_accent_themed: #FFFFFF;--vkui--color_background_accent_themed--hover: #FFFFFF;--vkui--color_background_accent_themed--active: #FFFFFF;--vkui--color_background_accent_alternative: #529EF4;--vkui--color_background_accent_alternative--hover: #59A2F4;--vkui--color_background_accent_alternative--active: #60A6F5;--vkui--color_icon_accent: #529EF4;--vkui--color_icon_accent--hover: #59A2F4;--vkui--color_icon_accent--active: #60A6F5;--vkui--color_text_accent: #529EF4;--vkui--color_text_accent--hover: #59A2F4;--vkui--color_text_accent--active: #60A6F5;--vkui--color_text_accent_themed: #FFFFFF;--vkui--color_text_accent_themed--hover: #FFFFFF;--vkui--color_text_accent_themed--active: #FFFFFF;--vkui--color_stroke_accent: #529EF4;--vkui--color_stroke_accent--hover: #59A2F4;--vkui--color_stroke_accent--active: #60A6F5;--vkui--color_stroke_accent_themed: #FFFFFF;--vkui--color_stroke_accent_themed--hover: #FFFFFF;--vkui--color_stroke_accent_themed--active: #FFFFFF;--vkui--color_stroke_contrast: #FFFFFF;--vkui--color_stroke_contrast--hover: #FFFFFF;--vkui--color_stroke_contrast--active: #FFFFFF;--vkui--color_action_sheet_text: #529EF4;--vkui--color_action_sheet_text--hover: #59A2F4;--vkui--color_action_sheet_text--active: #60A6F5;--vkui--color_background_content: #19191A;--vkui--color_background_content--hover: #222223;--vkui--color_background_content--active: #2B2B2C;--vkui--color_background_secondary: #232324;--vkui--color_background_secondary--hover: #2C2C2D;--vkui--color_background_secondary--active: #353536;--vkui--color_background_secondary_alpha: rgba(255, 255, 255, 0.04);--vkui--color_background_secondary_alpha--hover: rgba(255, 255, 255, 0.08);--vkui--color_background_secondary_alpha--active: rgba(255, 255, 255, 0.12);--vkui--color_background_tertiary: #202021;--vkui--color_background_tertiary--hover: #29292A;--vkui--color_background_tertiary--active: #323233;--vkui--color_background: #0A0A0A;--vkui--color_background--hover: #141414;--vkui--color_background--active: #1E1E1E;--vkui--color_background_contrast: #FFFFFF;--vkui--color_background_contrast--hover: #FFFFFF;--vkui--color_background_contrast--active: #FFFFFF;--vkui--color_background_contrast_secondary_alpha: rgba(255, 255, 255, 0.20);--vkui--color_background_contrast_secondary_alpha--hover: rgba(255, 255, 255, 0.24);--vkui--color_background_contrast_secondary_alpha--active: rgba(255, 255, 255, 0.28);--vkui--color_background_warning: #6C4A00;--vkui--color_background_warning--hover: #72510A;--vkui--color_background_warning--active: #785814;--vkui--color_background_negative: #E64646;--vkui--color_background_negative--hover: #E74D4D;--vkui--color_background_negative--active: #E85555;--vkui--color_background_negative_tint: #522E2E;--vkui--color_background_negative_tint--hover: #593636;--vkui--color_background_negative_tint--active: #603F3F;--vkui--color_text_negative: #E64646;--vkui--color_text_negative--hover: #E74D4D;--vkui--color_text_negative--active: #E85555;--vkui--color_icon_negative: #E64646;--vkui--color_icon_negative--hover: #E74D4D;--vkui--color_icon_negative--active: #E85555;--vkui--color_stroke_negative: #E64646;--vkui--color_stroke_negative--hover: #E74D4D;--vkui--color_stroke_negative--active: #E85555;--vkui--color_header_background: #19191A;--vkui--color_header_background--hover: #222223;--vkui--color_header_background--active: #2B2B2C;--vkui--color_panel_header_icon: #71AAEB;--vkui--color_panel_header_icon--hover: #77ADEC;--vkui--color_panel_header_icon--active: #7CB1ED;--vkui--color_icon_primary: #E1E3E6;--vkui--color_icon_primary--hover: #E2E4E7;--vkui--color_icon_primary--active: #E3E5E8;--vkui--color_icon_primary_invariably: #2C2D2E;--vkui--color_icon_primary_invariably--hover: #343536;--vkui--color_icon_primary_invariably--active: #3D3E3F;--vkui--color_icon_medium: #B0B1B6;--vkui--color_icon_medium--hover: #B3B4B9;--vkui--color_icon_medium--active: #B6B7BC;--vkui--color_icon_medium_alpha: rgba(241, 247, 255, 0.66);--vkui--color_icon_medium_alpha--hover: rgba(241, 247, 255, 0.7000000000000001);--vkui--color_icon_medium_alpha--active: rgba(241, 247, 255, 0.74);--vkui--color_icon_secondary: #76787A;--vkui--color_icon_secondary--hover: #7B7D7F;--vkui--color_icon_secondary--active: #818385;--vkui--color_icon_secondary_alpha: rgba(0, 0, 0, 0.43);--vkui--color_icon_secondary_alpha--hover: rgba(0, 0, 0, 0.47000000000000003);--vkui--color_icon_secondary_alpha--active: rgba(0, 0, 0, 0.51);--vkui--color_icon_tertiary: #5D5F61;--vkui--color_icon_tertiary--hover: #636567;--vkui--color_icon_tertiary--active: #6A6C6E;--vkui--color_icon_tertiary_alpha: rgba(255, 255, 255, 0.3);--vkui--color_icon_tertiary_alpha--hover: rgba(255, 255, 255, 0.34);--vkui--color_icon_tertiary_alpha--active: rgba(255, 255, 255, 0.38);--vkui--color_image_border_alpha: rgba(255, 255, 255, 0.08);--vkui--color_image_border_alpha--hover: rgba(255, 255, 255, 0.12);--vkui--color_image_border_alpha--active: rgba(255, 255, 255, 0.16);--vkui--color_write_bar_input_background: #232324;--vkui--color_write_bar_input_background--hover: #2C2C2D;--vkui--color_write_bar_input_background--active: #353536;--vkui--color_write_bar_input_border_alpha: rgba(255, 255, 255, 0.8);--vkui--color_write_bar_input_border_alpha--hover: rgba(255, 255, 255, 0.84);--vkui--color_write_bar_input_border_alpha--active: rgba(255, 255, 255, 0.88);--vkui--color_track_background: #202021;--vkui--color_track_background--hover: #29292A;--vkui--color_track_background--active: #323233;--vkui--color_track_buffer: #405772;--vkui--color_track_buffer--hover: #485E78;--vkui--color_track_buffer--active: #4F647D;--vkui--color_background_modal: #2D2D2E;--vkui--color_background_modal--hover: #353536;--vkui--color_background_modal--active: #3E3E3F;--vkui--color_image_placeholder_alpha: rgba(241, 247, 255, 0.08);--vkui--color_image_placeholder_alpha--hover: rgba(241, 247, 255, 0.12);--vkui--color_image_placeholder_alpha--active: rgba(241, 247, 255, 0.16);--vkui--color_image_placeholder: #2A2B2C;--vkui--color_image_placeholder--hover: #333334;--vkui--color_image_placeholder--active: #3B3C3D;--vkui--color_search_field_background: #232324;--vkui--color_search_field_background--hover: #2C2C2D;--vkui--color_search_field_background--active: #353536;--vkui--color_field_border_alpha: rgba(255, 255, 255, 0.12);--vkui--color_field_border_alpha--hover: rgba(255, 255, 255, 0.16);--vkui--color_field_border_alpha--active: rgba(255, 255, 255, 0.2);--vkui--color_separator_primary_alpha: rgba(0, 0, 0, 0.4);--vkui--color_separator_primary_alpha--hover: rgba(0, 0, 0, 0.44);--vkui--color_separator_primary_alpha--active: rgba(0, 0, 0, 0.48);--vkui--color_separator_secondary: #141415;--vkui--color_separator_secondary--hover: #1D1D1E;--vkui--color_separator_secondary--active: #272728;--vkui--color_separator_primary: #0F0F10;--vkui--color_separator_primary--hover: #19191A;--vkui--color_separator_primary--active: #222223;--vkui--color_text_link: #529EF4;--vkui--color_text_link--hover: #59A2F4;--vkui--color_text_link--active: #60A6F5;--vkui--color_text_link_themed: #FFFFFF;--vkui--color_text_link_themed--hover: #FFFFFF;--vkui--color_text_link_themed--active: #FFFFFF;--vkui--color_text_muted: #E1E3E6;--vkui--color_text_muted--hover: #E2E4E7;--vkui--color_text_muted--active: #E3E5E8;--vkui--color_text_primary: #E1E3E6;--vkui--color_text_primary--hover: #E2E4E7;--vkui--color_text_primary--active: #E3E5E8;--vkui--color_text_primary_invariably: #000000;--vkui--color_text_primary_invariably--hover: #0A0A0A;--vkui--color_text_primary_invariably--active: #141414;--vkui--color_text_secondary: #76787A;--vkui--color_text_secondary--hover: #7B7D7F;--vkui--color_text_secondary--active: #818385;--vkui--color_text_subhead: #C1C3C6;--vkui--color_text_subhead--hover: #C3C5C8;--vkui--color_text_subhead--active: #C6C8CB;--vkui--color_text_tertiary: #636567;--vkui--color_text_tertiary--hover: #696B6D;--vkui--color_text_tertiary--active: #6F7173;--vkui--color_write_bar_icon: #529EF4;--vkui--color_write_bar_icon--hover: #59A2F4;--vkui--color_write_bar_icon--active: #60A6F5;--vkui--color_accent_blue: #529EF4;--vkui--color_accent_blue--hover: #59A2F4;--vkui--color_accent_blue--active: #60A6F5;--vkui--color_accent_gray: #A3ADB8;--vkui--color_accent_gray--hover: #A7B0BB;--vkui--color_accent_gray--active: #AAB4BE;--vkui--color_accent_red: #FF3347;--vkui--color_accent_red--hover: #FF3B4E;--vkui--color_accent_red--active: #FF4356;--vkui--color_accent_green: #4BB34B;--vkui--color_accent_green--hover: #52B652;--vkui--color_accent_green--active: #59B959;--vkui--color_accent_orange: #FFA000;--vkui--color_accent_orange--hover: #FFA40A;--vkui--color_accent_orange--active: #FFA814;--vkui--color_accent_purple: #735CE6;--vkui--color_accent_purple--hover: #7963E7;--vkui--color_accent_purple--active: #7E69E8;--vkui--color_accent_violet: #792EC0;--vkui--color_accent_violet--hover: #7E36C3;--vkui--color_accent_violet--active: #843FC5;--vkui--color_skeleton_from: #F5F5F5;--vkui--color_skeleton_from--hover: #F5F5F5;--vkui--color_skeleton_from--active: #F6F6F6;--vkui--color_skeleton_to: #E1E3E6;--vkui--color_skeleton_to--hover: #E2E4E7;--vkui--color_skeleton_to--active: #E3E5E8;--vkui--color_accent_secondary: #3F8AE0;--vkui--color_accent_secondary--hover: #478FE1;--vkui--color_accent_secondary--active: #4E93E2;--vkui--color_text_link_visited: #4986CC;--vkui--color_text_link_visited--hover: #508BCE;--vkui--color_text_link_visited--active: #5890D0;--vkui--color_text_contrast: #FFFFFF;--vkui--color_text_contrast--hover: #FFFFFF;--vkui--color_text_contrast--active: #FFFFFF;--vkui--color_text_contrast_themed: #000000;--vkui--color_text_contrast_themed--hover: #0A0A0A;--vkui--color_text_contrast_themed--active: #141414;--vkui--color_icon_contrast: #FFFFFF;--vkui--color_icon_contrast--hover: #FFFFFF;--vkui--color_icon_contrast--active: #FFFFFF;--vkui--color_icon_contrast_themed: #000000;--vkui--color_icon_contrast_themed--hover: #0A0A0A;--vkui--color_icon_contrast_themed--active: #141414;--vkui--color_link_contrast: #FFFFFF;--vkui--color_link_contrast--hover: #FFFFFF;--vkui--color_link_contrast--active: #FFFFFF;--vkui--color_text_positive: #4BB34B;--vkui--color_text_positive--hover: #52B652;--vkui--color_text_positive--active: #59B959;--vkui--color_background_positive: #4BB34B;--vkui--color_background_positive--hover: #52B652;--vkui--color_background_positive--active: #59B959;--vkui--color_icon_positive: #4BB34B;--vkui--color_icon_positive--hover: #52B652;--vkui--color_icon_positive--active: #59B959;--vkui--color_stroke_positive: #4BB34B;--vkui--color_stroke_positive--hover: #52B652;--vkui--color_stroke_positive--active: #59B959;--vkui--color_avatar_overlay: rgba(129, 140, 153, 0.48);--vkui--color_avatar_overlay--hover: rgba(129, 140, 153, 0.52);--vkui--color_avatar_overlay--active: rgba(129, 140, 153, 0.56);--vkui--color_overlay_primary: rgba(0, 0, 0, 0.4);--vkui--color_overlay_primary--hover: rgba(0, 0, 0, 0.44);--vkui--color_overlay_primary--active: rgba(0, 0, 0, 0.48);--vkui--color_transparent: transparent;--vkui--color_transparent--hover: rgba(255, 255, 255, 0.04);--vkui--color_transparent--active: rgba(255, 255, 255, 0.08);";
}
exports.getDeclarationVarColorsString = getDeclarationVarColorsString;
function getDeclarationVarColorsObject() {
    return { "--vkui--color_background_accent": "#529EF4", "--vkui--color_background_accent--hover": "#59A2F4", "--vkui--color_background_accent--active": "#60A6F5", "--vkui--color_background_accent_themed": "#FFFFFF", "--vkui--color_background_accent_themed--hover": "#FFFFFF", "--vkui--color_background_accent_themed--active": "#FFFFFF", "--vkui--color_background_accent_alternative": "#529EF4", "--vkui--color_background_accent_alternative--hover": "#59A2F4", "--vkui--color_background_accent_alternative--active": "#60A6F5", "--vkui--color_icon_accent": "#529EF4", "--vkui--color_icon_accent--hover": "#59A2F4", "--vkui--color_icon_accent--active": "#60A6F5", "--vkui--color_text_accent": "#529EF4", "--vkui--color_text_accent--hover": "#59A2F4", "--vkui--color_text_accent--active": "#60A6F5", "--vkui--color_text_accent_themed": "#FFFFFF", "--vkui--color_text_accent_themed--hover": "#FFFFFF", "--vkui--color_text_accent_themed--active": "#FFFFFF", "--vkui--color_stroke_accent": "#529EF4", "--vkui--color_stroke_accent--hover": "#59A2F4", "--vkui--color_stroke_accent--active": "#60A6F5", "--vkui--color_stroke_accent_themed": "#FFFFFF", "--vkui--color_stroke_accent_themed--hover": "#FFFFFF", "--vkui--color_stroke_accent_themed--active": "#FFFFFF", "--vkui--color_stroke_contrast": "#FFFFFF", "--vkui--color_stroke_contrast--hover": "#FFFFFF", "--vkui--color_stroke_contrast--active": "#FFFFFF", "--vkui--color_action_sheet_text": "#529EF4", "--vkui--color_action_sheet_text--hover": "#59A2F4", "--vkui--color_action_sheet_text--active": "#60A6F5", "--vkui--color_background_content": "#19191A", "--vkui--color_background_content--hover": "#222223", "--vkui--color_background_content--active": "#2B2B2C", "--vkui--color_background_secondary": "#232324", "--vkui--color_background_secondary--hover": "#2C2C2D", "--vkui--color_background_secondary--active": "#353536", "--vkui--color_background_secondary_alpha": "rgba(255, 255, 255, 0.04)", "--vkui--color_background_secondary_alpha--hover": "rgba(255, 255, 255, 0.08)", "--vkui--color_background_secondary_alpha--active": "rgba(255, 255, 255, 0.12)", "--vkui--color_background_tertiary": "#202021", "--vkui--color_background_tertiary--hover": "#29292A", "--vkui--color_background_tertiary--active": "#323233", "--vkui--color_background": "#0A0A0A", "--vkui--color_background--hover": "#141414", "--vkui--color_background--active": "#1E1E1E", "--vkui--color_background_contrast": "#FFFFFF", "--vkui--color_background_contrast--hover": "#FFFFFF", "--vkui--color_background_contrast--active": "#FFFFFF", "--vkui--color_background_contrast_secondary_alpha": "rgba(255, 255, 255, 0.20)", "--vkui--color_background_contrast_secondary_alpha--hover": "rgba(255, 255, 255, 0.24)", "--vkui--color_background_contrast_secondary_alpha--active": "rgba(255, 255, 255, 0.28)", "--vkui--color_background_warning": "#6C4A00", "--vkui--color_background_warning--hover": "#72510A", "--vkui--color_background_warning--active": "#785814", "--vkui--color_background_negative": "#E64646", "--vkui--color_background_negative--hover": "#E74D4D", "--vkui--color_background_negative--active": "#E85555", "--vkui--color_background_negative_tint": "#522E2E", "--vkui--color_background_negative_tint--hover": "#593636", "--vkui--color_background_negative_tint--active": "#603F3F", "--vkui--color_text_negative": "#E64646", "--vkui--color_text_negative--hover": "#E74D4D", "--vkui--color_text_negative--active": "#E85555", "--vkui--color_icon_negative": "#E64646", "--vkui--color_icon_negative--hover": "#E74D4D", "--vkui--color_icon_negative--active": "#E85555", "--vkui--color_stroke_negative": "#E64646", "--vkui--color_stroke_negative--hover": "#E74D4D", "--vkui--color_stroke_negative--active": "#E85555", "--vkui--color_header_background": "#19191A", "--vkui--color_header_background--hover": "#222223", "--vkui--color_header_background--active": "#2B2B2C", "--vkui--color_panel_header_icon": "#71AAEB", "--vkui--color_panel_header_icon--hover": "#77ADEC", "--vkui--color_panel_header_icon--active": "#7CB1ED", "--vkui--color_icon_primary": "#E1E3E6", "--vkui--color_icon_primary--hover": "#E2E4E7", "--vkui--color_icon_primary--active": "#E3E5E8", "--vkui--color_icon_primary_invariably": "#2C2D2E", "--vkui--color_icon_primary_invariably--hover": "#343536", "--vkui--color_icon_primary_invariably--active": "#3D3E3F", "--vkui--color_icon_medium": "#B0B1B6", "--vkui--color_icon_medium--hover": "#B3B4B9", "--vkui--color_icon_medium--active": "#B6B7BC", "--vkui--color_icon_medium_alpha": "rgba(241, 247, 255, 0.66)", "--vkui--color_icon_medium_alpha--hover": "rgba(241, 247, 255, 0.7000000000000001)", "--vkui--color_icon_medium_alpha--active": "rgba(241, 247, 255, 0.74)", "--vkui--color_icon_secondary": "#76787A", "--vkui--color_icon_secondary--hover": "#7B7D7F", "--vkui--color_icon_secondary--active": "#818385", "--vkui--color_icon_secondary_alpha": "rgba(0, 0, 0, 0.43)", "--vkui--color_icon_secondary_alpha--hover": "rgba(0, 0, 0, 0.47000000000000003)", "--vkui--color_icon_secondary_alpha--active": "rgba(0, 0, 0, 0.51)", "--vkui--color_icon_tertiary": "#5D5F61", "--vkui--color_icon_tertiary--hover": "#636567", "--vkui--color_icon_tertiary--active": "#6A6C6E", "--vkui--color_icon_tertiary_alpha": "rgba(255, 255, 255, 0.3)", "--vkui--color_icon_tertiary_alpha--hover": "rgba(255, 255, 255, 0.34)", "--vkui--color_icon_tertiary_alpha--active": "rgba(255, 255, 255, 0.38)", "--vkui--color_image_border_alpha": "rgba(255, 255, 255, 0.08)", "--vkui--color_image_border_alpha--hover": "rgba(255, 255, 255, 0.12)", "--vkui--color_image_border_alpha--active": "rgba(255, 255, 255, 0.16)", "--vkui--color_write_bar_input_background": "#232324", "--vkui--color_write_bar_input_background--hover": "#2C2C2D", "--vkui--color_write_bar_input_background--active": "#353536", "--vkui--color_write_bar_input_border_alpha": "rgba(255, 255, 255, 0.8)", "--vkui--color_write_bar_input_border_alpha--hover": "rgba(255, 255, 255, 0.84)", "--vkui--color_write_bar_input_border_alpha--active": "rgba(255, 255, 255, 0.88)", "--vkui--color_track_background": "#202021", "--vkui--color_track_background--hover": "#29292A", "--vkui--color_track_background--active": "#323233", "--vkui--color_track_buffer": "#405772", "--vkui--color_track_buffer--hover": "#485E78", "--vkui--color_track_buffer--active": "#4F647D", "--vkui--color_background_modal": "#2D2D2E", "--vkui--color_background_modal--hover": "#353536", "--vkui--color_background_modal--active": "#3E3E3F", "--vkui--color_image_placeholder_alpha": "rgba(241, 247, 255, 0.08)", "--vkui--color_image_placeholder_alpha--hover": "rgba(241, 247, 255, 0.12)", "--vkui--color_image_placeholder_alpha--active": "rgba(241, 247, 255, 0.16)", "--vkui--color_image_placeholder": "#2A2B2C", "--vkui--color_image_placeholder--hover": "#333334", "--vkui--color_image_placeholder--active": "#3B3C3D", "--vkui--color_search_field_background": "#232324", "--vkui--color_search_field_background--hover": "#2C2C2D", "--vkui--color_search_field_background--active": "#353536", "--vkui--color_field_border_alpha": "rgba(255, 255, 255, 0.12)", "--vkui--color_field_border_alpha--hover": "rgba(255, 255, 255, 0.16)", "--vkui--color_field_border_alpha--active": "rgba(255, 255, 255, 0.2)", "--vkui--color_separator_primary_alpha": "rgba(0, 0, 0, 0.4)", "--vkui--color_separator_primary_alpha--hover": "rgba(0, 0, 0, 0.44)", "--vkui--color_separator_primary_alpha--active": "rgba(0, 0, 0, 0.48)", "--vkui--color_separator_secondary": "#141415", "--vkui--color_separator_secondary--hover": "#1D1D1E", "--vkui--color_separator_secondary--active": "#272728", "--vkui--color_separator_primary": "#0F0F10", "--vkui--color_separator_primary--hover": "#19191A", "--vkui--color_separator_primary--active": "#222223", "--vkui--color_text_link": "#529EF4", "--vkui--color_text_link--hover": "#59A2F4", "--vkui--color_text_link--active": "#60A6F5", "--vkui--color_text_link_themed": "#FFFFFF", "--vkui--color_text_link_themed--hover": "#FFFFFF", "--vkui--color_text_link_themed--active": "#FFFFFF", "--vkui--color_text_muted": "#E1E3E6", "--vkui--color_text_muted--hover": "#E2E4E7", "--vkui--color_text_muted--active": "#E3E5E8", "--vkui--color_text_primary": "#E1E3E6", "--vkui--color_text_primary--hover": "#E2E4E7", "--vkui--color_text_primary--active": "#E3E5E8", "--vkui--color_text_primary_invariably": "#000000", "--vkui--color_text_primary_invariably--hover": "#0A0A0A", "--vkui--color_text_primary_invariably--active": "#141414", "--vkui--color_text_secondary": "#76787A", "--vkui--color_text_secondary--hover": "#7B7D7F", "--vkui--color_text_secondary--active": "#818385", "--vkui--color_text_subhead": "#C1C3C6", "--vkui--color_text_subhead--hover": "#C3C5C8", "--vkui--color_text_subhead--active": "#C6C8CB", "--vkui--color_text_tertiary": "#636567", "--vkui--color_text_tertiary--hover": "#696B6D", "--vkui--color_text_tertiary--active": "#6F7173", "--vkui--color_write_bar_icon": "#529EF4", "--vkui--color_write_bar_icon--hover": "#59A2F4", "--vkui--color_write_bar_icon--active": "#60A6F5", "--vkui--color_accent_blue": "#529EF4", "--vkui--color_accent_blue--hover": "#59A2F4", "--vkui--color_accent_blue--active": "#60A6F5", "--vkui--color_accent_gray": "#A3ADB8", "--vkui--color_accent_gray--hover": "#A7B0BB", "--vkui--color_accent_gray--active": "#AAB4BE", "--vkui--color_accent_red": "#FF3347", "--vkui--color_accent_red--hover": "#FF3B4E", "--vkui--color_accent_red--active": "#FF4356", "--vkui--color_accent_green": "#4BB34B", "--vkui--color_accent_green--hover": "#52B652", "--vkui--color_accent_green--active": "#59B959", "--vkui--color_accent_orange": "#FFA000", "--vkui--color_accent_orange--hover": "#FFA40A", "--vkui--color_accent_orange--active": "#FFA814", "--vkui--color_accent_purple": "#735CE6", "--vkui--color_accent_purple--hover": "#7963E7", "--vkui--color_accent_purple--active": "#7E69E8", "--vkui--color_accent_violet": "#792EC0", "--vkui--color_accent_violet--hover": "#7E36C3", "--vkui--color_accent_violet--active": "#843FC5", "--vkui--color_skeleton_from": "#F5F5F5", "--vkui--color_skeleton_from--hover": "#F5F5F5", "--vkui--color_skeleton_from--active": "#F6F6F6", "--vkui--color_skeleton_to": "#E1E3E6", "--vkui--color_skeleton_to--hover": "#E2E4E7", "--vkui--color_skeleton_to--active": "#E3E5E8", "--vkui--color_accent_secondary": "#3F8AE0", "--vkui--color_accent_secondary--hover": "#478FE1", "--vkui--color_accent_secondary--active": "#4E93E2", "--vkui--color_text_link_visited": "#4986CC", "--vkui--color_text_link_visited--hover": "#508BCE", "--vkui--color_text_link_visited--active": "#5890D0", "--vkui--color_text_contrast": "#FFFFFF", "--vkui--color_text_contrast--hover": "#FFFFFF", "--vkui--color_text_contrast--active": "#FFFFFF", "--vkui--color_text_contrast_themed": "#000000", "--vkui--color_text_contrast_themed--hover": "#0A0A0A", "--vkui--color_text_contrast_themed--active": "#141414", "--vkui--color_icon_contrast": "#FFFFFF", "--vkui--color_icon_contrast--hover": "#FFFFFF", "--vkui--color_icon_contrast--active": "#FFFFFF", "--vkui--color_icon_contrast_themed": "#000000", "--vkui--color_icon_contrast_themed--hover": "#0A0A0A", "--vkui--color_icon_contrast_themed--active": "#141414", "--vkui--color_link_contrast": "#FFFFFF", "--vkui--color_link_contrast--hover": "#FFFFFF", "--vkui--color_link_contrast--active": "#FFFFFF", "--vkui--color_text_positive": "#4BB34B", "--vkui--color_text_positive--hover": "#52B652", "--vkui--color_text_positive--active": "#59B959", "--vkui--color_background_positive": "#4BB34B", "--vkui--color_background_positive--hover": "#52B652", "--vkui--color_background_positive--active": "#59B959", "--vkui--color_icon_positive": "#4BB34B", "--vkui--color_icon_positive--hover": "#52B652", "--vkui--color_icon_positive--active": "#59B959", "--vkui--color_stroke_positive": "#4BB34B", "--vkui--color_stroke_positive--hover": "#52B652", "--vkui--color_stroke_positive--active": "#59B959", "--vkui--color_avatar_overlay": "rgba(129, 140, 153, 0.48)", "--vkui--color_avatar_overlay--hover": "rgba(129, 140, 153, 0.52)", "--vkui--color_avatar_overlay--active": "rgba(129, 140, 153, 0.56)", "--vkui--color_overlay_primary": "rgba(0, 0, 0, 0.4)", "--vkui--color_overlay_primary--hover": "rgba(0, 0, 0, 0.44)", "--vkui--color_overlay_primary--active": "rgba(0, 0, 0, 0.48)", "--vkui--color_transparent": "transparent", "--vkui--color_transparent--hover": "rgba(255, 255, 255, 0.04)", "--vkui--color_transparent--active": "rgba(255, 255, 255, 0.08)" };
}
exports.getDeclarationVarColorsObject = getDeclarationVarColorsObject;
