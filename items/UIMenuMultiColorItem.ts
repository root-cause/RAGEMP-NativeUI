import BadgeStyle from "../enums/BadgeStyle";
import Sprite from "../modules/Sprite";
import Color from "../utils/Color";
import LiteEvent from "../utils/LiteEvent";
import Point from "../utils/Point";
import Size from "../utils/Size";
import UIMenuItem from "./UIMenuItem";

export default class UIMenuMultiColorItem extends UIMenuItem {
	private readonly _firstHalfSprite: Sprite;
	private readonly _secondHalfSprite: Sprite;

	constructor(text: string, topColor: Color, bottomColor: Color, description: string = '') {
		super(text, description);
		const y = 0;

		this._firstHalfSprite = new Sprite(
			"mpcarhud",
			"leaderboard_car_colour_icon_primaryhalf",
			new Point(0, 0),
			new Size(50, 50),
			0,
			topColor
		);

		this._secondHalfSprite = new Sprite(
			"mpcarhud",
			"leaderboard_car_colour_icon_2ndaryhalf",
			new Point(0, 0),
			new Size(50, 50),
			0,
			bottomColor
		);
	}

	// TODO: don't rely on sprites
	get CurrentFirstColor() {
		return this._firstHalfSprite.color;
	}

	set CurrentFirstColor(color: Color) {
		this._firstHalfSprite.color = color;
	}

	get CurrentSecondColor() {
		return this._secondHalfSprite.color;
	}

	set CurrentSecondColor(color: Color) {
		this._secondHalfSprite.color = color;
	}

	public SetVerticalPosition(y: number) {
		super.SetVerticalPosition(y);

		this._firstHalfSprite.pos = new Point(
			380 + this.Offset.X,
			y + 138 + this.Offset.Y
		);

		this._secondHalfSprite.pos = this._firstHalfSprite.pos;
	}

	public Draw() {
		super.Draw();

		this._firstHalfSprite.pos = new Point(
			380 + this.Offset.X + this.Parent.WidthOffset,
			this._firstHalfSprite.pos.Y
		);

		this._secondHalfSprite.pos = this._firstHalfSprite.pos;

		this._firstHalfSprite.Draw();
		this._secondHalfSprite.Draw();
	}

	public SetRightBadge(badge: BadgeStyle) {
		return this;
	}

	public SetRightLabel(text: string) {
		return this;
	}
}
