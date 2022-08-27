import { Fraction } from "../../Common/DataObjects/Fraction";
import { Voice } from "./Voice";
import { SourceStaffEntry } from "./SourceStaffEntry";
import { Note } from "./Note";
import { LyricsEntry } from "./Lyrics/LyricsEntry";
import { TechnicalInstruction } from "./Instructions/TechnicalInstruction";
import { OrnamentContainer } from "./OrnamentContainer";
import { KeyInstruction } from "./Instructions/KeyInstruction";
import { Dictionary } from "typescript-collections";
import { Arpeggio } from "./Arpeggio";
import { Articulation } from "./Articulation";
/**
 * A [[VoiceEntry]] contains the notes in a voice at a timestamp.
 */
export declare class VoiceEntry {
    /**
     *
     * @param timestamp The relative timestamp within the source measure.
     * @param parentVoice
     * @param parentSourceStaffEntry
     * @param isGrace States whether the VoiceEntry has (only) grace notes.
     * @param graceNoteSlash States whether the grace note(s) have a slash (Acciaccatura, played before the beat)
     */
    constructor(timestamp: Fraction, parentVoice: Voice, parentSourceStaffEntry: SourceStaffEntry, isGrace?: boolean, graceNoteSlash?: boolean, graceSlur?: boolean);
    private parentVoice;
    private parentSourceStaffEntry;
    private timestamp;
    private notes;
    private isGrace;
    /** States whether the grace notes come after a main note (at end of measure). */
    private graceAfterMainNote;
    private graceNoteSlash;
    private graceSlur;
    private articulations;
    private technicalInstructions;
    private lyricsEntries;
    /** The Arpeggio consisting of this VoiceEntry's notes. Undefined if no arpeggio exists. */
    private arpeggio;
    private ornamentContainer;
    private wantedStemDirection;
    /** Stem direction specified in the xml stem element. */
    private stemDirectionXml;
    private stemDirection;
    /** Color of the stem given in XML. RGB Hexadecimal, like #00FF00. */
    private stemColorXml;
    /** Color of the stem currently set. RGB Hexadecimal, like #00FF00. */
    private stemColor;
    get ParentSourceStaffEntry(): SourceStaffEntry;
    get ParentVoice(): Voice;
    get Timestamp(): Fraction;
    set Timestamp(value: Fraction);
    get Notes(): Note[];
    get IsGrace(): boolean;
    set IsGrace(value: boolean);
    get GraceAfterMainNote(): boolean;
    set GraceAfterMainNote(value: boolean);
    get GraceNoteSlash(): boolean;
    set GraceNoteSlash(value: boolean);
    get GraceSlur(): boolean;
    set GraceSlur(value: boolean);
    get Articulations(): Articulation[];
    get TechnicalInstructions(): TechnicalInstruction[];
    get LyricsEntries(): Dictionary<number, LyricsEntry>;
    get Arpeggio(): Arpeggio;
    set Arpeggio(value: Arpeggio);
    get OrnamentContainer(): OrnamentContainer;
    set OrnamentContainer(value: OrnamentContainer);
    set WantedStemDirection(value: StemDirectionType);
    get WantedStemDirection(): StemDirectionType;
    set StemDirectionXml(value: StemDirectionType);
    get StemDirectionXml(): StemDirectionType;
    set StemDirection(value: StemDirectionType);
    get StemDirection(): StemDirectionType;
    get StemColorXml(): string;
    set StemColorXml(value: string);
    get StemColor(): string;
    set StemColor(value: string);
    hasArticulation(articulation: Articulation): boolean;
    static isSupportedArticulation(articulation: ArticulationEnum): boolean;
    hasTie(): boolean;
    hasSlur(): boolean;
    isStaccato(): boolean;
    isAccent(): boolean;
    getVerseNumberForLyricEntry(lyricsEntry: LyricsEntry): number;
    createVoiceEntriesForOrnament(voiceEntryWithOrnament: VoiceEntry, activeKey: KeyInstruction): VoiceEntry[];
    private createBaseVoiceEntry;
    private createAlteratedVoiceEntry;
}
export declare enum ArticulationEnum {
    accent = 0,
    strongaccent = 1,
    marcatoup = 2,
    marcatodown = 3,
    invertedstrongaccent = 4,
    staccato = 5,
    staccatissimo = 6,
    spiccato = 7,
    tenuto = 8,
    fermata = 9,
    invertedfermata = 10,
    breathmark = 11,
    caesura = 12,
    lefthandpizzicato = 13,
    naturalharmonic = 14,
    snappizzicato = 15,
    upbow = 16,
    downbow = 17,
    scoop = 18,
    plop = 19,
    doit = 20,
    falloff = 21,
    stress = 22,
    unstress = 23,
    detachedlegato = 24,
    otherarticulation = 25,
    bend = 26
}
export declare enum StemDirectionType {
    Undefined = -1,
    Up = 0,
    Down = 1,
    None = 2,
    Double = 3
}
