import BadgeStyle from "../enums/BadgeStyle";
import Sprite from "../modules/Sprite";
import Color from "../utils/Color";
import LiteEvent from "../utils/LiteEvent";
import Point from "../utils/Point";
import Size from "../utils/Size";
import UIMenuItem from "./UIMenuItem";

export default class UIMenuColorItem extends UIMenuItem {
	private readonly _colorSprite: Sprite;

	constructor(text: string, color: Color, description: string = '') {
		super(text, description);
		const y = 0;

		this._colorSprite = new Sprite(
			"mpcarhud",
			"leaderboard_car_colour_icon_singlecolour",
			new Point(0, 0),
			new Size(50, 50),
			0,
			color
		);
	}

	// TODO: don't rely on _colorSprite
	get CurrentColor() {
		return this._colorSprite.color;
	}

	set CurrentColor(color: Color) {
		this._colorSprite.color = color;
	}

	public SetVerticalPosition(y: number) {
		super.SetVerticalPosition(y);

		this._colorSprite.pos = new Point(
			380 + this.Offset.X,
			y + 138 + this.Offset.Y
		);
	}

	public Draw() {
		super.Draw();

		this._colorSprite.pos = new Point(
			380 + this.Offset.X + this.Parent.WidthOffset,
			this._colorSprite.pos.Y
		);

		this._colorSprite.Draw();
	}

	public SetRightBadge(badge: BadgeStyle) {
		return this;
	}

	public SetRightLabel(text: string) {
		return this;
	}
}
