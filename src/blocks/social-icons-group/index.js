import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import { __ } from "@wordpress/i18n";
import "./style.css";
import "./editor.css";
import blocksIcon from "../../assets/blocks-icon";
import EditBlock from "./edit-block";
import SaveBlock from "./save-block";

registerBlockType(metadata.name, {
  icon: blocksIcon.icon,
  edit: EditBlock,
  save: SaveBlock,
});
