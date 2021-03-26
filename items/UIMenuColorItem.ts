import BadgeStyle from "../enums/BadgeStyle";
import ResRectangle from "../modules/ResRectangle";
import Sprite from "../modules/Sprite";
import Color from "../utils/Color";
import LiteEvent from "../utils/LiteEvent";
import Point from "../utils/Point";
import Size from "../utils/Size";
import UIMenuItem from "./UIMenuItem";

export default class UIMenuColorItem extends UIMenuItem {
	private readonly _colorRect: ResRectangle;

	constructor(text: string, color: Color, description: string = '') {
		super(text, description);
		const y = 0;

		this._colorRect = new ResRectangle(
			new Point(410, y + 95),
			new Size(28, 28),
			color
		);
	}

	// TODO: color getter and setter

	public SetVerticalPosition(y: number) {
		super.SetVerticalPosition(y);

		this._colorRect.pos = new Point(
			380 + this.Offset.X + this.Parent.WidthOffset,
			y + 138 + this.Offset.Y
		);
	}

	public Draw() {
		super.Draw();

		// TODO: border/background for better visibility

		this._colorRect.pos = new Point(
			380 + this.Offset.X + this.Parent.WidthOffset + 14,
			this._colorRect.pos.Y + 11
		);

		this._colorRect.Draw();
	}

	public SetRightBadge(badge: BadgeStyle) {
		return this;
	}

	public SetRightLabel(text: string) {
		return this;
	}
}
