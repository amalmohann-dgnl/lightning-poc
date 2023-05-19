export interface JavaScriptInterface {
    passParameters(fldMerchCode: string,
        fldMerchRefNbr: string,
        fldTxnAmt: string,
        fldTxnScAmt: string,
        fldDatTimeTxn: string,
        fldDate1: string,
        fldDate2: string): void;
    openActivity: (url: string) => void;
}