const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Flowchart,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Flowchart.Acts.StartFlowchart,
		C3.Plugins.Flowchart.Cnds.OnAnyNodeChange,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Flowchart.Exps.OutputValue,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Flowchart.Acts.GotoNextFlowchartNode,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Flowchart.Cnds.OnTaggedNodeChangeInFlowchart,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{TextBig: 0},
	{Start: 0},
	{Hard: 0},
	{StartPageBG: 0},
	{TextBackground: 0},
	{Mouse: 0},
	{Text2: 0},
	{textforscene: 0},
	{FlowchartController: 0},
	{Sprite: 0},
	{Text: 0},
	{Jump: 0},
	{BeSadForever: 0},
	{Browser: 0},
	{CurrentNodeName: 0}
];

self.InstanceType = {
	TextBig: class extends self.ITextInstance {},
	Start: class extends self.ITextInstance {},
	Hard: class extends self.ITextInstance {},
	StartPageBG: class extends self.ISpriteInstance {},
	TextBackground: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Text2: class extends self.ITextInstance {},
	textforscene: class extends self.ITextInstance {},
	FlowchartController: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Jump: class extends self.ITextInstance {},
	BeSadForever: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {}
}