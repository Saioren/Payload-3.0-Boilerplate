import { OtherBlock } from "./OtherBlock/types";
import { TestBlock } from "./TestBlock/types";

export type BlockTypes = 'testBlock' | 'otherBlock' // your block slugs

export type Block = BaseBlock & (
    TestBlock | OtherBlock //import your block types
)

export interface BaseBlock {
    blockName: string;
    blockType: BlockTypes
}

export type Blocks = Block[]