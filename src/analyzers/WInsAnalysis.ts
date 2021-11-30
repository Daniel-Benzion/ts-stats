import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer{

    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {

    }
}