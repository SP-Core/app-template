// @ts-nocheck

class ImBoolean{

}

class ImFontAtlas{

}

class ImGuiContext{

}

class ImAssertCallback{

}

class ImGuiStyle{

}
class ImGuiIO{

}

class ImDrawData{

}
class ImVec2{

}

class ImVec4{

}

class ImDouble{

}
class ImShort{

}

class ImLong{

}

class ImFloat{

}


// Framework: ImGui
class ImGuiType{
    init(): void{/*void*/}
createContext(sharedFontAtlas?: ImFontAtlas): ImGuiContext{return null;}
destroyContext(ctx?: ImGuiContext): void{/*void*/}
getCurrentContext(): ImGuiContext{return null;}
setCurrentContext(ctx: ImGuiContext): void{/*void*/}
setAssertCallback(callback: ImAssertCallback): void{/*void*/}
getIO(): ImGuiIO{return null;}
getStyle(): ImGuiStyle{return null;}
newFrame(): void{/*void*/}
endFrame(): void{/*void*/}
render(): void{/*void*/}
getDrawData(): ImDrawData{return null;}
showDemoWindow(pOpen?: ImBoolean): void{/*void*/}
showMetricsWindow(pOpen?: ImBoolean): void{/*void*/}
showStackToolWindow(pOpen?: ImBoolean): void{/*void*/}
showAboutWindow(pOpen?: ImBoolean): void{/*void*/}
showStyleEditor(ref?: ImGuiStyle): void{/*void*/}
showStyleSelector(label: string): boolean{return null;}
showFontSelector(label: string): void{/*void*/}
showUserGuide(): void{/*void*/}
getVersion(): string{return null;}
styleColorsDark(style?: ImGuiStyle): void{/*void*/}
styleColorsLight(style?: ImGuiStyle): void{/*void*/}
styleColorsClassic(style?: ImGuiStyle): void{/*void*/}
begin(title: string, pOpen?: ImBoolean, imGuiWindowFlags?: number): boolean{return null;}
end(): void{/*void*/}
beginChild(strId: string, width?: number, height?: number, border?: boolean, imGuiWindowFlags?: number): boolean{return null;}
beginChild(imGuiID: number, width?: number, height?: number, border?: boolean, imGuiWindowFlags?: number): boolean{return null;}
endChild(): void{/*void*/}
isWindowAppearing(): boolean{return null;}
isWindowCollapsed(): boolean{return null;}
isWindowFocused(imGuiFocusedFlags?: number): boolean{return null;}
isWindowHovered(imGuiHoveredFlags?: number): boolean{return null;}
getWindowDrawList(): ImDrawList{return null;}
getWindowDpiScale(): number{return null;}
getWindowPos(dstImVec2?: ImVec2): ImVec2{return null;}
getWindowPosX(): number{return null;}
getWindowPosY(): number{return null;}
getWindowSize(dstImVec2?: ImVec2): ImVec2{return null;}
getWindowSizeX(): number{return null;}
getWindowSizeY(): number{return null;}
getWindowWidth(): number{return null;}
getWindowHeight(): number{return null;}
getWindowViewport(): ImGuiViewport{return null;}
setNextWindowPos(x: number, y: number, imGuiCond?: number, pivotX?: number, pivotY?: number): void{/*void*/}
setNextWindowSize(width: number, height: number, imGuiCond?: number): void{/*void*/}
setNextWindowSizeConstraints(minWidth: number, minHeight: number, maxWidth: number, maxHeight: number): void{/*void*/}
setNextWindowContentSize(width: number, height: number): void{/*void*/}
setNextWindowCollapsed(collapsed: boolean, imGuiCond?: number): void{/*void*/}
setNextWindowFocus(): void{/*void*/}
setNextWindowBgAlpha(alpha: number): void{/*void*/}
setNextWindowViewport(viewportId: number): void{/*void*/}
setWindowPos(x: number, y: number, imGuiCond?: number): void{/*void*/}
setWindowSize(width: number, height: number, imGuiCond?: number): void{/*void*/}
setWindowCollapsed(collapsed: boolean, imGuiCond?: number): void{/*void*/}
setWindowFocus(): void{/*void*/}
setWindowFontScale(scale: number): void{/*void*/}
setWindowPos(name: string, x: number, y: number, imGuiCond?: number): void{/*void*/}
setWindowSize(name: string, x: number, y: number, imGuiCond?: number): void{/*void*/}
setWindowCollapsed(name: string, collapsed: boolean, imGuiCond?: number): void{/*void*/}
setWindowFocus(name: string): void{/*void*/}
getContentRegionAvail(dstImVec2?: ImVec2): ImVec2{return null;}
getContentRegionAvailX(): number{return null;}
getContentRegionAvailY(): number{return null;}
getContentRegionMax(dstImVec2?: ImVec2): ImVec2{return null;}
// ImGui TypeScript Code

// Functions to get content region maximum values
getContentRegionMaxX(): number{return null;}
getContentRegionMaxY(): number{return null;}

// Functions to get window content region minimum values
getWindowContentRegionMin(): ImVec2{return null;}
getWindowContentRegionMin(dstImVec2: ImVec2): void{/*void*/}
getWindowContentRegionMinX(): number{return null;}
getWindowContentRegionMinY(): number{return null;}

// Functions to get window content region maximum values
getWindowContentRegionMax(): ImVec2{return null;}
getWindowContentRegionMax(dstImVec2: ImVec2): void{/*void*/}
getWindowContentRegionMaxX(): number{return null;}
getWindowContentRegionMaxY(): number{return null;}

// Functions to get and set scroll values
getScrollX(): number{return null;}
getScrollY(): number{return null;}
setScrollX(scrollX: number): void{/*void*/}
setScrollY(scrollY: number): void{/*void*/}
getScrollMaxX(): number{return null;}
getScrollMaxY(): number{return null;}

// Functions to set scroll position
setScrollHereX(centerXRatio?: number): void{/*void*/}
setScrollHereY(centerYRatio?: number): void{/*void*/}
setScrollFromPosX(localX: number, centerXRatio?: number): void{/*void*/}
setScrollFromPosY(localY: number, centerYRatio?: number): void{/*void*/}

// Functions to push and pop font settings
pushFont(font: ImFont): void{/*void*/}
popFont(): void{/*void*/}

// Functions to push and pop style color settings
pushStyleColor(imGuiCol: number, r: number, g: number, b: number, a: number): void{/*void*/}
pushStyleColor(imGuiCol: number, r: number, g: number, b: number, a: number): void{/*void*/}
pushStyleColor(imGuiCol: number, col: number): void{/*void*/}
popStyleColor(count?: number): void{/*void*/}

// Functions to push and pop style var settings
pushStyleVar(imGuiStyleVar: number, val: number | ImVec2, valY?: number): void{/*void*/}
popStyleVar(count?: number): void{/*void*/}

// Functions to push and pop keyboard focus settings
pushAllowKeyboardFocus(allowKeyboardFocus: boolean): void{/*void*/}
popAllowKeyboardFocus(): void{/*void*/}

// Functions to push and pop button repeat settings
pushButtonRepeat(repeat: boolean): void{/*void*/}
popButtonRepeat(): void{/*void*/}

// Functions to push and pop item width settings
pushItemWidth(itemWidth: number): void{/*void*/}
popItemWidth(): void{/*void*/}

// Functions to set and calculate item width
setNextItemWidth(itemWidth: number): void{/*void*/}
calcItemWidth(): number{return null;}

// Functions to push and pop text wrap position settings
pushTextWrapPos(wrapLocalPosX?: number): void{/*void*/}
popTextWrapPos(): void{/*void*/}

// Functions to get font and font texture UV values
getFont(): ImFont{return null;}
getFontSize(): number{return null;}
getFontTexUvWhitePixel(): ImVec2{return null;}
getFontTexUvWhitePixel(dstImVec2: ImVec2): void{/*void*/}
getFontTexUvWhitePixelX(): number{return null;}
getFontTexUvWhitePixelY(): number{return null;}

// Functions to get color values
getColorU32(imGuiCol: number, alphaMul?: number): number{return null;}
getColorU32(r: number, g: number, b: number, a: number): number{return null;}
getColorU32i(col: number): number{return null;}

// Functions to get and set style color values
getStyleColorVec4(imGuiStyleVar: number): ImVec4{return null;}
getStyleColorVec4(imGuiStyleVar: number, dstImVec4: ImVec4): void{/*void*/}

// Functions for layout and spacing
separator(): void{/*void*/}
sameLine(offsetFromStartX?: number, spacing?: number): void{/*void*/}
newLine(): void{/*void*/}
spacing(): void{/*void*/}
dummy(width: number, height: number): void{/*void*/}
indent(indentW?: number): void{/*void*/}
unindent(indentW?: number): void{/*void*/}
beginGroup(): void{/*void*/}
endGroup(): void{/*void*/}

// Functions for cursor position
getCursorPos(): ImVec2{return null;}
getCursorPos(dstImVec2: ImVec2): void{/*void*/}
getCursorPosX(): number{return null;}
getCursorPosY(): number{return null;}
setCursorPos(x: number, y: number): void{/*void*/}
setCursorPosX(x: number): void{/*void*/}
setCursorPosY(y: number): void{/*void*/}
getCursorStartPos(): ImVec2{return null;}
getCursorStartPos(dstImVec2: ImVec2): void{/*void*/}
getCursorStartPosX(): number{return null;}
getCursorStartPosY(): number{return null;}
getCursorScreenPos(): ImVec2{return null;}
getCursorScreenPos(dstImVec2: ImVec2): void{/*void*/}
getCursorScreenPosX(): number{return null;}
getCursorScreenPosY(): number{return null;}
setCursorScreenPos(x: number, y: number): void{/*void*/}

// Functions for text and frame padding
alignTextToFramePadding(): void{/*void*/}
getTextLineHeight(): number{return null;}
getTextLineHeightWithSpacing(): number{return null;}
getFrameHeight(): number{return null;}
getFrameHeightWithSpacing(): number{return null;}

// Functions for pushing and popping IDs
pushID(strId: string): void{/*void*/}
pushID(strIdBegin: string, strIdEnd: string): void{/*void*/}
pushID(ptrId: number | string): void{/*void*/}
pushID(intId: number): void{/*void*/}
popID(): void{/*void*/}
getID(strId: string): number{return null;}
getID(strIdBegin: string, strIdEnd: string): number{return null;}
getID(ptrId: number): number{return null;}
textUnformatted(text: string): void{/*void*/}
text(text: string): void{/*void*/}
textColored(r: number, g: number, b: number, a: number, text: string): void{/*void*/}
textColored(r: number, g: number, b: number, a: number, text: string): void{/*void*/}
textColored(col: number, text: string): void{/*void*/}
textDisabled(text: string): void{/*void*/}
textWrapped(text: string): void{/*void*/}
labelText(label: string, text: string): void{/*void*/}
bulletText(text: string): void{/*void*/}
button(label: string): boolean{return null;}
button(label: string, width: number, height: number): boolean{return null;}
smallButton(label: string): boolean{return null;}
invisibleButton(strId: string, width: number, height: number): boolean{return null;}
invisibleButton(strId: string, width: number, height: number, imGuiButtonFlags: number): boolean{return null;}
arrowButton(strId: string, dir: number): boolean{return null;}
image(textureID: number, sizeX: number, sizeY: number): void{/*void*/}
image(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number): void{/*void*/}
image(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number): void{/*void*/}
image(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number, tintColorR: number, tintColorG: number, tintColorB: number, tintColorA: number): void{/*void*/}
image(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number, tintColorR: number, tintColorG: number, tintColorB: number, tintColorA: number, borderR: number, borderG: number, borderB: number, borderA: number): void{/*void*/}
imageButton(textureID: number, sizeX: number, sizeY: number): boolean{return null;}
imageButton(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number): boolean{return null;}
imageButton(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number): boolean{return null;}
imageButton(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number, framePadding: number): boolean{return null;}
imageButton(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number, framePadding: number, bgColorR: number, bgColorG: number, bgColorB: number, bgColorA: number): boolean{return null;}
imageButton(textureID: number, sizeX: number, sizeY: number, uv0X: number, uv0Y: number, uv1X: number, uv1Y: number, framePadding: number, bgColorR: number, bgColorG: number, bgColorB: number, bgColorA: number, tintR: number, tintG: number, tintB: number, tintA: number): boolean{return null;}
checkbox(label: string, active: boolean): boolean{return null;}
checkbox(label: string, active: boolean): boolean{return null;}
checkboxFlags(label: string, v: number, flagsValue: number): boolean{return null;}
radioButton(label: string, active: boolean): boolean{return null;}
radioButton(label: string, v: number, vButton: number): boolean{return null;}
progressBar(fraction: number): void{/*void*/}
progressBar(fraction: number, sizeArgX: number, sizeArgY: number): void{/*void*/}
progressBar(fraction: number, sizeArgX: number, sizeArgY: number, overlay: string): void{/*void*/}
bullet(): void{/*void*/}
beginCombo(label: string, previewValue: string): boolean{return null;}
beginCombo(label: string, previewValue: string, imGuiComboFlags: number): boolean{return null;}
endCombo(): void{/*void*/}
combo(label: string, currentItem: number, items: string[]): boolean{return null;}
combo(label: string, currentItem: number, items: string[], popupMaxHeightInItems: number): boolean{return null;}
combo(label: string, currentItem: number, itemsSeparatedByZeros: string): boolean{return null;}
combo(label: string, currentItem: number, itemsSeparatedByZeros: string, popupMaxHeightInItems: number): boolean{return null;}
dragFloat(label: string, v: number[]): boolean{return null;}
dragFloat(label: string, v: number[], vSpeed: number): boolean{return null;}
dragFloat(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragFloat(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragFloat(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragFloat2(label: string, v: number[]): boolean{return null;}
dragFloat2(label: string, v: number[], vSpeed: number): boolean{return null;}
dragFloat2(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragFloat2(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragFloat2(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragFloat2(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragFloat3(label: string, v: number[]): boolean{return null;}
dragFloat3(label: string, v: number[], vSpeed: number): boolean{return null;}
dragFloat3(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragFloat3(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragFloat3(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragFloat3(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragFloat4(label: string, v: number[]): boolean{return null;}
dragFloat4(label: string, v: number[], vSpeed: number): boolean{return null;}
dragFloat4(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragFloat4(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragFloat4(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragFloat4(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[]): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number, format: string, formatMax: string): boolean{return null;}
dragFloatRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number, format: string, formatMax: string, imGuiSliderFlags: number): boolean{return null;}
dragInt(label: string, v: number[]): boolean{return null;}
dragInt(label: string, v: number[], vSpeed: number): boolean{return null;}
dragInt(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragInt(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}


dragInt(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragInt2(label: string, v: number[]): boolean{return null;}
dragInt2(label: string, v: number[], vSpeed: number): boolean{return null;}
dragInt2(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragInt2(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragInt2(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragInt3(label: string, v: number[]): boolean{return null;}
dragInt3(label: string, v: number[], vSpeed: number): boolean{return null;}
dragInt3(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragInt3(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragInt3(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragInt4(label: string, v: number[]): boolean{return null;}
dragInt4(label: string, v: number[], vSpeed: number): boolean{return null;}
dragInt4(label: string, v: number[], vSpeed: number, vMin: number): boolean{return null;}
dragInt4(label: string, v: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragInt4(label: string, v: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragIntRange2(label: string, vCurrentMin: number[], vCurrentMax: number[]): boolean{return null;}
dragIntRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number): boolean{return null;}
dragIntRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number): boolean{return null;}
dragIntRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number): boolean{return null;}
dragIntRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number, format: string): boolean{return null;}
dragIntRange2(label: string, vCurrentMin: number[], vCurrentMax: number[], vSpeed: number, vMin: number, vMax: number, format: string, formatMax: string): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImInt, vSpeed: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImInt, vSpeed: number, pMin: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImInt, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImInt, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImInt, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImFloat, vSpeed: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImFloat, vSpeed: number, pMin: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImFloat, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImFloat, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImFloat, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImDouble, vSpeed: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImDouble, vSpeed: number, pMin: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImDouble, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImDouble, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImDouble, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImLong, vSpeed: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImLong, vSpeed: number, pMin: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImLong, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImLong, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImLong, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImShort, vSpeed: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImShort, vSpeed: number, pMin: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImShort, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImShort, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalar(label: string, dataType: number, pData: ImShort, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImInt, components: number, vSpeed: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImInt, components: number, vSpeed: number, pMin: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImInt, components: number, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImInt, components: number, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImInt, components: number, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImFloat, components: number, vSpeed: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImFloat, components: number, vSpeed: number, pMin: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImFloat, components: number, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImFloat, components: number, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImFloat, components: number, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImDouble, components: number, vSpeed: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImDouble, components: number, vSpeed: number, pMin: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImDouble, components: number, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImDouble, components: number, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImDouble, components: number, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImLong, components: number, vSpeed: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImLong, components: number, vSpeed: number, pMin: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImLong, components: number, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImLong, components: number, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImLong, components: number, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImShort, components: number, vSpeed: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImShort, components: number, vSpeed: number, pMin: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImShort, components: number, vSpeed: number, pMin: number, pMax: number): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImShort, components: number, vSpeed: number, pMin: number, pMax: number, format: string): boolean{return null;}
dragScalarN(label: string, dataType: number, pData: ImShort, components: number, vSpeed: number, pMin: number, pMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderFloat(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderFloat(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderFloat(label: string, v: number[], vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderFloat2(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderFloat2(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderFloat2(label: string, v: number[], vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderFloat3(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderFloat3(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderFloat3(label: string, v: number[], vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderFloat4(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderFloat4(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderFloat4(label: string, v: number[], vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderAngle(label: string, vRad: number[]): boolean{return null;}
sliderAngle(label: string, vRad: number[], vDegreesMin: number): boolean{return null;}
sliderAngle(label: string, vRad: number[], vDegreesMin: number, vDegreesMax: number): boolean{return null;}
sliderAngle(label: string, vRad: number[], vDegreesMin: number, vDegreesMax: number, format: string): boolean{return null;}
sliderInt(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderInt(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderInt2(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderInt2(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderInt3(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderInt3(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderInt4(label: string, v: number[], vMin: number, vMax: number): boolean{return null;}
sliderInt4(label: string, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImInt, vMin: number, vMax: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImInt, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImInt, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImFloat, vMin: number, vMax: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImFloat, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImFloat, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImLong, vMin: number, vMax: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImLong, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImLong, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImDouble, vMin: number, vMax: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImDouble, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImDouble, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImShort, vMin: number, vMax: number): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImShort, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalar(label: string, dataType: number, v: ImShort, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImInt, vMin: number, vMax: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImInt, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImInt, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImFloat, vMin: number, vMax: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImFloat, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImFloat, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImLong, vMin: number, vMax: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImLong, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImLong, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImDouble, vMin: number, vMax: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImDouble, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImDouble, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImShort, vMin: number, vMax: number): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImShort, vMin: number, vMax: number, format: string): boolean{return null;}
sliderScalarN(label: string, dataType: number, components: number, v: ImShort, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
vSliderFloat(label: string, sizeX: number, sizeY: number, v: number[], vMin: number, vMax: number): boolean{return null;}
vSliderFloat(label: string, sizeX: number, sizeY: number, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
vSliderFloat(label: string, sizeX: number, sizeY: number, v: number[], vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
vSliderInt(label: string, sizeX: number, sizeY: number, v: number[], vMin: number, vMax: number): boolean{return null;}
vSliderInt(label: string, sizeX: number, sizeY: number, v: number[], vMin: number, vMax: number, format: string): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImInt, vMin: number, vMax: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImInt, vMin: number, vMax: number, format: string): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImInt, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImFloat, vMin: number, vMax: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImFloat, vMin: number, vMax: number, format: string): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImFloat, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImLong, vMin: number, vMax: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImLong, vMin: number, vMax: number, format: string): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImLong, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImDouble, vMin: number, vMax: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImDouble, vMin: number, vMax: number, format: string): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImDouble, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImShort, vMin: number, vMax: number): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImShort, vMin: number, vMax: number, format: string): boolean{return null;}
vSliderScalar(label: string, sizeX: number, sizeY: number, dataType: number, v: ImShort, vMin: number, vMax: number, format: string, imGuiSliderFlags: number): boolean{return null;}
inputText(label: string, text: ImString): boolean{return null;}
inputText(label: string, text: ImString, imGuiInputTextFlags: number): boolean{return null;}
inputTextMultiline(label: string, text: ImString): boolean{return null;}
inputTextMultiline(label: string, text: ImString, width: number, height: number): boolean{return null;}
inputTextMultiline(label: string, text: ImString, imGuiInputTextFlags: number): boolean{return null;}
inputTextMultiline(label: string, text: ImString, width: number, height: number, imGuiInputTextFlags: number): boolean{return null;}
inputTextWithHint(label: string, hint: string, text: ImString): boolean{return null;}
inputTextWithHint(label: string, hint: string, text: ImString, imGuiInputTextFlags: number): boolean{return null;}
inputFloat(label: string, v: ImFloat): boolean{return null;}
inputFloat(label: string, v: ImFloat, step: number): boolean{return null;}
inputFloat(label: string, v: ImFloat, step: number, stepFast: number): boolean{return null;}
inputFloat(label: string, v: ImFloat, step: number, stepFast: number, format: string): boolean{return null;}
inputFloat(label: string, v: ImFloat, step: number, stepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputFloat2(label: string, v: number[]): boolean{return null;}
inputFloat2(label: string, v: number[], format: string): boolean{return null;}
inputFloat2(label: string, v: number[], format: string, imGuiInputTextFlags: number): boolean{return null;}
inputFloat3(label: string, v: number[]): boolean{return null;}
inputFloat3(label: string, v: number[], format: string): boolean{return null;}
inputFloat3(label: string, v: number[], format: string, imGuiInputTextFlags: number): boolean{return null;}
inputFloat4(label: string, v: number[]): boolean{return null;}
inputFloat4(label: string, v: number[], format: string): boolean{return null;}
inputFloat4(label: string, v: number[], format: string, imGuiInputTextFlags: number): boolean{return null;}
inputInt(label: string, v: ImInt): boolean{return null;}
inputInt(label: string, v: ImInt, step: number): boolean{return null;}
inputInt(label: string, v: ImInt, step: number, stepFast: number): boolean{return null;}
inputInt(label: string, v: ImInt, step: number, stepFast: number, imGuiInputTextFlags: number): boolean{return null;}
inputInt2(label: string, v: number[]): boolean{return null;}
inputInt2(label: string, v: number[], imGuiInputTextFlags: number): boolean{return null;}
inputInt3(label: string, v: number[]): boolean{return null;}
inputInt3(label: string, v: number[], imGuiInputTextFlags: number): boolean{return null;}
inputInt4(label: string, v: number[]): boolean{return null;}
inputInt4(label: string, v: number[], imGuiInputTextFlags: number): boolean{return null;}
inputDouble(label: string, v: ImDouble): boolean{return null;}
inputDouble(label: string, v: ImDouble, step: number): boolean{return null;}
inputDouble(label: string, v: ImDouble, step: number, stepFast: number): boolean{return null;}
inputDouble(label: string, v: ImDouble, step: number, stepFast: number, format: string): boolean{return null;}
inputDouble(label: string, v: ImDouble, step: number, stepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImInt): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImInt, pStep: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImInt, pStep: number, pStepFast: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImInt, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImInt, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImFloat): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImFloat, pStep: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImFloat, pStep: number, pStepFast: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImFloat, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImFloat, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImLong): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImLong, pStep: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImLong, pStep: number, pStepFast: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImLong, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImLong, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImDouble): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImDouble, pStep: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImDouble, pStep: number, pStepFast: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImDouble, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImDouble, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImShort): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImShort, pStep: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImShort, pStep: number, pStepFast: number): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImShort, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalar(label: string, dataType: number, pData: ImShort, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImInt, components: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImInt, components: number, pStep: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImInt, components: number, pStep: number, pStepFast: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImInt, components: number, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImInt, components: number, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImFloat, components: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImFloat, components: number, pStep: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImFloat, components: number, pStep: number, pStepFast: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImFloat, components: number, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImFloat, components: number, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImLong, components: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImLong, components: number, pStep: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImLong, components: number, pStep: number, pStepFast: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImLong, components: number, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImLong, components: number, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImDouble, components: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImDouble, components: number, pStep: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImDouble, components: number, pStep: number, pStepFast: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImDouble, components: number, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImDouble, components: number, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImShort, components: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImShort, components: number, pStep: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImShort, components: number, pStep: number, pStepFast: number): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImShort, components: number, pStep: number, pStepFast: number, format: string): boolean{return null;}
inputScalarN(label: string, dataType: number, pData: ImShort, components: number, pStep: number, pStepFast: number, format: string, imGuiInputTextFlags: number): boolean{return null;}
colorEdit3(label: string, col: number[]): boolean{return null;}
colorEdit3(label: string, col: number[], imGuiColorEditFlags: number): boolean{return null;}
colorEdit4(label: string, col: number[]): boolean{return null;}
colorEdit4(label: string, col: number[], imGuiColorEditFlags: number): boolean{return null;}
colorPicker3(label: string, col: number[]): boolean{return null;}
colorPicker3(label: string, col: number[], imGuiColorEditFlags: number): boolean{return null;}
colorPicker4(label: string, col: number[]): boolean{return null;}
colorPicker4(label: string, col: number[], imGuiColorEditFlags: number): boolean{return null;}
colorPicker4(label: string, col: number[], imGuiColorEditFlags: number, refCol: number): boolean{return null;}
colorButton(descId: string, col: number[]): boolean{return null;}
colorButton(descId: string, col: number[], imGuiColorEditFlags: number): boolean{return null;}
colorButton(descId: string, col: number[], imGuiColorEditFlags: number, width: number, height: number): boolean{return null;}
setColorEditOptions(imGuiColorEditFlags: number): void{/*void*/}
treeNode(label: string): boolean{return null;}
treeNode(strId: string, label: string): boolean{return null;}
treeNode(ptrId: number, label: string): boolean{return null;}
treeNodeEx(label: string): boolean{return null;}
treeNodeEx(label: string, imGuiTreeNodeFlags: number): boolean{return null;}
treeNodeEx(strId: string, imGuiTreeNodeFlags: number, label: string): boolean{return null;}
treeNodeEx(ptrId: number, imGuiTreeNodeFlags: number, label: string): boolean{return null;}
treePush(): void{/*void*/}
treePush(strId: string): void{/*void*/}
treePush(ptrId: number): void{/*void*/}
treePop(): void{/*void*/}
getTreeNodeToLabelSpacing(): number{return null;}
collapsingHeader(label: string): boolean{return null;}
collapsingHeader(label: string, imGuiTreeNodeFlags: number): boolean{return null;}
collapsingHeader(label: string, pVisible: ImBoolean): boolean{return null;}
collapsingHeader(label: string, pVisible: ImBoolean, imGuiTreeNodeFlags: number): boolean{return null;}
setNextItemOpen(isOpen: boolean): void{/*void*/}
setNextItemOpen(isOpen: boolean, cond: number): void{/*void*/}
selectable(label: string): boolean{return null;}
selectable(label: string, selected: boolean): boolean{return null;}
selectable(label: string, selected: boolean, imGuiSelectableFlags: number): boolean{return null;}
selectable(label: string, selected: boolean, imGuiSelectableFlags: number, sizeX: number, sizeY: number): boolean{return null;}
selectable(label: string, selected: ImBoolean): boolean{return null;}
selectable(label: string, selected: ImBoolean, imGuiSelectableFlags: number): boolean{return null;}
selectable(label: string, selected: ImBoolean, imGuiSelectableFlags: number, sizeX: number, sizeY: number): boolean{return null;}
beginListBox(label: string): boolean{return null;}
beginListBox(label: string, sizeX: number, sizeY: number): boolean{return null;}
endListBox(): void{/*void*/}
listBox(label: string, currentItem: ImInt, items: string[]): void{/*void*/}
listBox(label: string, currentItem: ImInt, items: string[], heightInItems: number): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number, valuesOffset: number): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number, scaleMax: number): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number, scaleMax: number, graphWidth: number, graphHeight: number): void{/*void*/}
plotLines(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number, scaleMax: number, graphWidth: number, graphHeight: number, stride: number): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number, valuesOffset: number): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number, scaleMax: number): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number, scaleMax: number, graphWidth: number, graphHeight: number): void{/*void*/}
plotHistogram(label: string, values: number[], valuesCount: number, valuesOffset: number, overlayText: string, scaleMin: number, scaleMax: number, graphWidth: number, graphHeight: number, stride: number): void{/*void*/}
value(prefix: string, b: boolean): void{/*void*/}
value(prefix: string, v: number): void{/*void*/}
value(prefix: string, v: bigint): void{/*void*/}
value(prefix: string, f: number): void{/*void*/}
value(prefix: string, f: number, floatFormat: string): void{/*void*/}
beginMenuBar(): boolean{return null;}
endMenuBar(): void{/*void*/}
beginMainMenuBar(): boolean{return null;}
endMainMenuBar(): void{/*void*/}
beginMenu(label: string): boolean{return null;}
beginMenu(label: string, enabled: boolean): boolean{return null;}
endMenu(): void{/*void*/}
menuItem(label: string): boolean{return null;}
menuItem(label: string, shortcut: string): boolean{return null;}
menuItem(label: string, shortcut: string, selected: boolean): boolean{return null;}
menuItem(label: string, shortcut: string, selected: boolean, enabled: boolean): boolean{return null;}
menuItem(label: string, shortcut: string, pSelected: ImBoolean): boolean{return null;}
menuItem(label: string, shortcut: string, pSelected: ImBoolean, enabled: boolean): boolean{return null;}
beginTooltip(): void{/*void*/}
endTooltip(): void{/*void*/}
setTooltip(text: string): void{/*void*/}
beginPopup(strId: string): boolean{return null;}
beginPopup(strId: string, imGuiWindowFlags: number): boolean{return null;}
beginPopupModal(name: string): boolean{return null;}
beginPopupModal(name: string, pOpen: ImBoolean): boolean{return null;}
beginPopupModal(name: string, imGuiWindowFlags: number): boolean{return null;}
beginPopupModal(name: string, pOpen: ImBoolean, imGuiWindowFlags: number): boolean{return null;}
endPopup(): void{/*void*/}
openPopup(strId: string): void{/*void*/}
openPopup(strId: string, imGuiPopupFlags: number): void{/*void*/}
openPopupOnItemClick(): void{/*void*/}
openPopupOnItemClick(strId: string): void{/*void*/}
openPopupOnItemClick(imGuiPopupFlags: number): void{/*void*/}
openPopupOnItemClick(strId: string, imGuiPopupFlags: number): void{/*void*/}
closeCurrentPopup(): void{/*void*/}
beginPopupContextItem(): boolean{return null;}
beginPopupContextItem(strId: string): boolean{return null;}
beginPopupContextItem(imGuiPopupFlags: number): boolean{return null;}
beginPopupContextItem(strId: string, imGuiPopupFlags: number): boolean{return null;}
beginPopupContextWindow(): boolean{return null;}
beginPopupContextWindow(strId: string): boolean{return null;}
beginPopupContextWindow(imGuiPopupFlags: number): boolean{return null;}
beginPopupContextWindow(strId: string, imGuiPopupFlags: number): boolean{return null;}
beginPopupContextVoid(): boolean{return null;}
beginPopupContextVoid(strId: string): boolean{return null;}
beginPopupContextVoid(imGuiPopupFlags: number): boolean{return null;}
beginPopupContextVoid(strId: string, imGuiPopupFlags: number): boolean{return null;}
isPopupOpen(strId: string): boolean{return null;}
isPopupOpen(strId: string, imGuiPopupFlags: number): boolean{return null;}
beginTable(id: string, column: number): boolean{return null;}
beginTable(id: string, column: number, imGuiTableFlags: number): boolean{return null;}
beginTable(id: string, column: number, imGuiTableFlags: number, outerSizeX: number, outerSizeY: number): boolean{return null;}
beginTable(id: string, column: number, imGuiTableFlags: number, outerSizeX: number, outerSizeY: number, innerWidth: number): boolean{return null;}
endTable(): void{/*void*/}
tableNextRow(): void{/*void*/}
tableNextRow(imGuiTableRowFlags: number): void{/*void*/}
tableNextRow(imGuiTableRowFlags: number, minRowHeight: number): void{/*void*/}
tableNextColumn(): boolean{return null;}
tableSetColumnIndex(columnN: number): boolean{return null;}
tableSetupColumn(label: string): void{/*void*/}
tableSetupColumn(label: string, imGuiTableColumnFlags: number): void{/*void*/}
tableSetupColumn(label: string, imGuiTableColumnFlags: number, initWidthOrWeight: number): void{/*void*/}
tableSetupColumn(label: string, imGuiTableColumnFlags: number, initWidthOrWeight: number, userId: number): void{/*void*/}
tableSetupScrollFreeze(cols: number, rows: number): void{/*void*/}
tableHeadersRow(): void{/*void*/}
tableHeader(label: string): void{/*void*/}
tableGetColumnCount(): number{return null;}
tableGetColumnIndex(): number{return null;}
tableGetRowIndex(): number{return null;}
tableGetColumnName(): string{return null;}
tableGetColumnName(columnN: number): string{return null;}
tableGetColumnFlags(): number{return null;}
tableGetColumnFlags(columnN: number): number{return null;}
tableSetBgColor(imGuiTableBgTarget: number, color: number): void{/*void*/}
tableSetBgColor(imGuiTableBgTarget: number, color: number, columnN: number): void{/*void*/}
columns(): void{/*void*/}
columns(count: number): void{/*void*/}
columns(count: number, id: string): void{/*void*/}
columns(count: number, id: string, border: boolean): void{/*void*/}
nextColumn(): void{/*void*/}
getColumnIndex(): number{return null;}
getColumnWidth(): number{return null;}
getColumnWidth(columnIndex: number): number{return null;}
setColumnWidth(columnIndex: number, width: number): void{/*void*/}
getColumnOffset(): number{return null;}
getColumnOffset(columnIndex: number): number{return null;}
setColumnOffset(columnIndex: number, offsetX: number): void{/*void*/}
getColumnsCount(): number{return null;}
beginTabBar(strId: string): boolean{return null;}
beginTabBar(strId: string, imGuiTabBarFlags: number): boolean{return null;}
endTabBar(): void{/*void*/}
beginTabItem(label: string): boolean{return null;}
beginTabItem(label: string, pOpen: ImBoolean): boolean{return null;}
beginTabItem(label: string, imGuiTabItemFlags: number): boolean{return null;}
beginTabItem(label: string, pOpen: ImBoolean, imGuiTabItemFlags: number): boolean{return null;}
endTabItem(): void{/*void*/}
tabItemButton(label: string): boolean{return null;}
tabItemButton(label: string, imGuiTabItemFlags: number): boolean{return null;}
setTabItemClosed(tabOrDockedWindowLabel: string): void{/*void*/}
dockSpace(imGuiID: number): number{return null;}
dockSpace(imGuiID: number, sizeX: number, sizeY: number): number{return null;}
dockSpace(imGuiID: number, sizeX: number, sizeY: number, imGuiDockNodeFlags: number): number{return null;}
dockSpace(imGuiID: number, sizeX: number, sizeY: number, imGuiDockNodeFlags: number, windowClass: ImGuiWindowClass): number{return null;}
dockSpaceOverViewport(): number{return null;}
dockSpaceOverViewport(viewport: ImGuiViewport): number{return null;}
dockSpaceOverViewport(viewport: ImGuiViewport, imGuiDockNodeFlags: number): number{return null;}
dockSpaceOverViewport(viewport: ImGuiViewport, imGuiDockNodeFlags: number, windowClass: ImGuiWindowClass): number{return null;}
setNextWindowDockID(dockId: number): void{/*void*/}
setNextWindowDockID(dockId: number, imGuiCond: number): void{/*void*/}
setNextWindowClass(windowClass: ImGuiWindowClass): void{/*void*/}
getWindowDockID(): number{return null;}
isWindowDocked(): boolean{return null;}
logToTTY(): void{/*void*/}
logToTTY(autoOpenDepth: number): void{/*void*/}
logToFile(): void{/*void*/}
logToFile(autoOpenDepth: number): void{/*void*/}
logToFile(autoOpenDepth: number, filename: string): void{/*void*/}
logToClipboard(): void{/*void*/}
logToClipboard(autoOpenDepth: number): void{/*void*/}
logFinish(): void{/*void*/}
logButtons(): void{/*void*/}
logText(text: string): void{/*void*/}
beginDragDropSource(): boolean{return null;}
beginDragDropSource(imGuiDragDropFlags: number): boolean{return null;}
setDragDropPayload(dataType: string, payload: any): boolean{return null;}
setDragDropPayload(dataType: string, payload: any, imGuiCond: number): boolean{return null;}
setDragDropPayload(payload: any): boolean{return null;}
setDragDropPayload(payload: any, imGuiCond: number): boolean{return null;}
endDragDropSource(): void{/*void*/}
beginDragDropTarget(): boolean{return null;}
acceptDragDropPayload<T>(dataType: string): T{return null;}
acceptDragDropPayload<T>(dataType: string, aClass: { new (): T }): T{return null;}
acceptDragDropPayload<T>(dataType: string, imGuiDragDropFlags: number): T{return null;}
acceptDragDropPayload<T>(aClass: { new (): T }): T{return null;}
acceptDragDropPayload<T>(aClass: { new (): T }, imGuiDragDropFlags: number): T{return null;}
endDragDropTarget(): void{/*void*/}
getDragDropPayload<T>(aClass: { new (): T }): T{return null;}
beginDisabled(): void{/*void*/}
beginDisabled(disabled: boolean): void{/*void*/}
endDisabled(): void{/*void*/}
pushClipRect(clipRectMinX: number, clipRectMinY: number, clipRectMaxX: number, clipRectMaxY: number, intersectWithCurrentClipRect: boolean): void{/*void*/}
popClipRect(): void{/*void*/}
setItemDefaultFocus(): void{/*void*/}
setKeyboardFocusHere(): void{/*void*/}
setKeyboardFocusHere(offset: number): void{/*void*/}
isItemHovered(): boolean{return null;}
isItemHovered(imGuiHoveredFlags: number): boolean{return null;}
isItemActive(): boolean{return null;}
isItemFocused(): boolean{return null;}
isItemClicked(): boolean{return null;}
isItemClicked(mouseButton: number): boolean{return null;}
isItemVisible(): boolean{return null;}
isItemEdited(): boolean{return null;}
isItemActivated(): boolean{return null;}
isItemDeactivated(): boolean{return null;}
isItemDeactivatedAfterEdit(): boolean{return null;}
isItemToggledOpen(): boolean{return null;}
isAnyItemHovered(): boolean{return null;}
isAnyItemActive(): boolean{return null;}
isAnyItemFocused(): boolean{return null;}
getItemRectMin(): ImVec2{return null;}
getItemRectMin(dstImVec2: ImVec2): void{/*void*/}
getItemRectMinX(): number{return null;}
getItemRectMinY(): number{return null;}
getItemRectMax(): ImVec2{return null;}
getItemRectMax(dstImVec2: ImVec2): void{/*void*/}
getItemRectMaxX(): number{return null;}
getItemRectMaxY(): number{return null;}
getItemRectSize(): ImVec2{return null;}
getItemRectSize(dstImVec2: ImVec2): void{/*void*/}
getItemRectSizeX(): number{return null;}
getItemRectSizeY(): number{return null;}
setItemAllowOverlap(): void{/*void*/}
getMainViewport(): ImGuiViewport{return null;}
isRectVisible(width: number, height: number): boolean{return null;}
isRectVisible(minX: number, minY: number, maxX: number, maxY: number): boolean{return null;}
getTime(): number{return null;}
getFrameCount(): number{return null;}
getBackgroundDrawList(): ImDrawList{return null;}
getForegroundDrawList(): ImDrawList{return null;}
getBackgroundDrawList(viewport: ImGuiViewport): ImDrawList{return null;}
getForegroundDrawList(viewport: ImGuiViewport): ImDrawList{return null;}
getStyleColorName(imGuiCol: number): string{return null;}
setStateStorage(storage: ImGuiStorage): void{/*void*/}
getStateStorage(): ImGuiStorage{return null;}
beginChildFrame(id: number, width: number, height: number): boolean{return null;}
beginChildFrame(id: number, width: number, height: number, imGuiWindowFlags: number): boolean{return null;}
endChildFrame(): void{/*void*/}
calcTextSize(text: string): ImVec2{return null;}
calcTextSize(text: string, hideTextAfterDoubleHash: boolean): ImVec2{return null;}
calcTextSize(text: string, hideTextAfterDoubleHash: boolean, wrapWidth: number): ImVec2{return null;}
calcTextSize(dstImVec2: ImVec2, text: string): void{/*void*/}
calcTextSize(dstImVec2: ImVec2, text: string, hideTextAfterDoubleHash: boolean): void{/*void*/}
calcTextSize(dstImVec2: ImVec2, text: string, wrapWidth: number): void{/*void*/}
calcTextSize(dstImVec2: ImVec2, text: string, hideTextAfterDoubleHash: boolean, wrapWidth: number): void{/*void*/}
colorConvertU32ToFloat4(in_value: number): ImVec4{return null;}
colorConvertU32ToFloat4(in_value: number, dstImVec4: ImVec4): void{/*void*/}
colorConvertFloat4ToU32(r: number, g: number, b: number, a: number): number{return null;}
colorConvertRGBtoHSV(rgb: number[], hsv: number[]): void{/*void*/}
colorConvertHSVtoRGB(hsv: number[], rgb: number[]): void{/*void*/}
getKeyIndex(imguiKey: number): number{return null;}
isKeyDown(userKeyIndex: number): boolean{return null;}
isKeyPressed(userKeyIndex: number): boolean{return null;}
isKeyPressed(userKeyIndex: number, repeat: boolean): boolean{return null;}
isKeyReleased(userKeyIndex: number): boolean{return null;}
getKeyPressedAmount(keyIndex: number, repeatDelay: number, rate: number): boolean{return null;}
captureKeyboardFromApp(): void{/*void*/}
captureKeyboardFromApp(wantCaptureKeyboardValue: boolean): void{/*void*/}
isMouseDown(button: number): boolean{return null;}
isAnyMouseDown(): boolean{return null;}
isMouseClicked(button: number): boolean{return null;}
isMouseClicked(button: number, repeat: boolean): boolean{return null;}
isMouseDoubleClicked(button: number): boolean{return null;}
getMouseClickedCount(button: number): number{return null;}
isMouseReleased(button: number): boolean{return null;}
isMouseDragging(button: number): boolean{return null;}
isMouseDragging(button: number, lockThreshold: number): boolean{return null;}
isMouseHoveringRect(minX: number, minY: number, maxX: number, maxY: number): boolean{return null;}
isMouseHoveringRect(minX: number, minY: number, maxX: number, maxY: number, clip: boolean): boolean{return null;}
isMousePosValid(): boolean{return null;}
isMousePosValid(mousePosX: number, mousePosY: number): boolean{return null;}
getMousePos(): ImVec2{return null;}
getMousePos(dstImVec2: ImVec2): void{/*void*/}
getMousePosX(): number{return null;}
getMousePosY(): number{return null;}
getMousePosOnOpeningCurrentPopup(): ImVec2{return null;}
getMousePosOnOpeningCurrentPopup(dstImVec2: ImVec2): void{/*void*/}
getMousePosOnOpeningCurrentPopupX(): number{return null;}
getMousePosOnOpeningCurrentPopupY(): number{return null;}
getMouseDragDelta(): ImVec2{return null;}
getMouseDragDelta(dstImVec2: ImVec2): void{/*void*/}
getMouseDragDeltaX(): number{return null;}
getMouseDragDeltaY(): number{return null;}
getMouseDragDelta(button: number): ImVec2{return null;}
getMouseDragDelta(dstImVec2: ImVec2, button: number): void{/*void*/}
getMouseDragDeltaX(button: number): number{return null;}
getMouseDragDeltaY(button: number): number{return null;}
getMouseDragDelta(button: number, lockThreshold: number): ImVec2{return null;}
getMouseDragDelta(dstImVec2: ImVec2, button: number, lockThreshold: number): void{/*void*/}
getMouseDragDeltaX(button: number, lockThreshold: number): number{return null;}
getMouseDragDeltaY(button: number, lockThreshold: number): number{return null;}
resetMouseDragDelta(): void{/*void*/}
resetMouseDragDelta(button: number): void{/*void*/}
getMouseCursor(): number{return null;}
setMouseCursor(type: number): void{/*void*/}
captureMouseFromApp(): void{/*void*/}
captureMouseFromApp(wantCaptureMouseValue: boolean): void{/*void*/}
getClipboardText(): string{return null;}
setClipboardText(text: string): void{/*void*/}
loadIniSettingsFromDisk(iniFilename: string): void{/*void*/}
loadIniSettingsFromMemory(iniData: string): void{/*void*/}
loadIniSettingsFromMemory(iniData: string, iniSize: number): void{/*void*/}
saveIniSettingsToDisk(iniFilename: string): void{/*void*/}
saveIniSettingsToMemory(): string{return null;}
saveIniSettingsToMemory(outIniSize: number): string{return null;}
getPlatformIO(): ImGuiPlatformIO{return null;}
updatePlatformWindows(): void{/*void*/}
renderPlatformWindowsDefault(): void{/*void*/}
destroyPlatformWindows(): void{/*void*/}
findViewportByID(imGuiID: number): ImGuiViewport{return null;}
findViewportByPlatformHandle(platformHandle: number): ImGuiViewport{return null;}



}
