import BadgeStyle from "../enums/BadgeStyle";
import Sprite from "../modules/Sprite";
import Color from "../utils/Color";
import LiteEvent from "../utils/LiteEvent";
import Point from "../utils/Point";
import Size from "../utils/Size";
import UIMenuItem from "./UIMenuItem";

export default class UIMenuMultiColorItem extends UIMenuItem {
	private readonly _topColorSprite: Sprite;
	private readonly _bottomColorSprite: Sprite;

	constructor(text: string, topColor: Color, bottomColor: Color, description: string = '') {
		super(text, description);
		const y = 0;

		this._topColorSprite = new Sprite(
			"commoncolorui", // now you need a custom .ytd
			"color_grad_multi_a",
			new Point(0, 0),
			new Size(50, 50),
			0,
			topColor
		);

		this._bottomColorSprite = new Sprite(
			"commoncolorui", // now you need a custom .ytd
			"color_grad_multi_b",
			new Point(0, 0),
			new Size(50, 50),
			0,
			bottomColor
		);
	}

	// TODO: don't rely on sprites
	get CurrentTopColor() {
		return this._topColorSprite.color;
	}

	set CurrentTopColor(color: Color) {
		this._topColorSprite.color = color;
	}

	get CurrentBottomColor() {
		return this._bottomColorSprite.color;
	}

	set CurrentBottomColor(color: Color) {
		this._bottomColorSprite.color = color;
	}

	public SetVerticalPosition(y: number) {
		super.SetVerticalPosition(y);

		this._topColorSprite.pos = new Point(
			380 + this.Offset.X,
			y + 138 + this.Offset.Y
		);

		this._bottomColorSprite.pos = this._topColorSprite.pos;
	}

	public Draw() {
		super.Draw();

		this._topColorSprite.pos = new Point(
			380 + this.Offset.X + this.Parent.WidthOffset,
			this._topColorSprite.pos.Y
		);

		this._bottomColorSprite.pos = this._topColorSprite.pos;

		this._topColorSprite.Draw();
		this._bottomColorSprite.Draw();
	}

	public SetRightBadge(badge: BadgeStyle) {
		return this;
	}

	public SetRightLabel(text: string) {
		return this;
	}
}
