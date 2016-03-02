/*
 aa-wea.js
 Assumed aa.js, aa-itm.js included
*/
aa.wea = {
  WEA_BOW: 0x0001,
  WEA_SHL: 0x0002,
  WEA_SW1: 0x0004,
  WEA_SW2: 0x0008,
  WEA_SCP: 0x0010,
  WEA_SP1: 0x0020,
  WEA_SP2: 0x0040,
  WEA_STF: 0x0080,
  WEA_AX1: 0x0100,
  WEA_AX2: 0x0200,
  WEA_KAT: 0x0400,
  WEA_NOD: 0x0800
};

aa.items.ItemWName1.props = { thProp: 'thProp1', thGrade: aa.GRADE_BAS | aa.EQUIP_CRF | aa.WEA_BOW, thVal1: 54, thLink: './th/reports/1455_DATA_LOAD_231054944/1455_DATA_LOAD_231054944-PIN-PRODUCT.PR_XREF.csv.gz' };
aa.items.ItemWName2.props = { thProp: 'thProp2', thGrade: aa.GRADE_GRN | aa.EQUIP_CRF | aa.WEA_BOW, thVal1: 2, thLink: './th/reports/1455_DATA_LOAD_231054944/1456_DATA_LOAD_231054944-PIN-PRODUCT.PR_XREF.csv.gz' };
aa.items.ItemWName3.props = { thProp: 'thProp3', thGrade: aa.GRADE_BAS | aa.EQUIP_OBS | aa.WEA_BOW, thVal2: 54, thVal3: 54, thVal4: 54, thVal5: 54, thVal6: 54, thVal7: 54, thVal8: 54 };
aa.items.ItemWName4.props = { thProp: 'thProp4', thGrade: aa.GRADE_BAS | aa.EQUIP_CRF | aa.WEA_STF, thVal1: 177, thVal9: 4 };

