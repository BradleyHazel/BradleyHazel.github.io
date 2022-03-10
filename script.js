
// getting the file system  

const fileSelector = document.getElementById('input');

function addPicture(){
let newDiv = document.createElement("div");
        newDiv.innerHTML = `<img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" id="loading">`
        container1.appendChild(newDiv);
}
const container1 = document.getElementById('container1');
//fs.readFile(file_location, (err, data) => {
    async function loadFile(file) {
        let text = await file.text();
        
    // turning the data to a string
    let stringData = text.toString();
    // grabbing the date due to the normal format, could replace with Regex later
    let date = stringData.slice(0,10);
    // replacing all of the redundant messaging with more relevant text or nothing at all 
    stringData = stringData.replaceAll(`SOAP Request: b'<soap-env:Body xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:platformCommon="urn:common_2017_2.platform.webservices.netsuite.com" xmlns:platformCore="urn:core_2017_2.platform.webservices.netsuite.com" xmlns:platformMsgs="urn:messages_2017_2.platform.webservices.netsuite.com">`,"")
    stringData = stringData.replaceAll(`saasoptics.netsuite.sync`,'');
    stringData = stringData.replaceAll(`SOAP Response: b'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">`,'');
    stringData = stringData.replaceAll(`<platformMsgs:getAll>\\n    <platformMsgs:record recordType="currency"/>\\n  </platformMsgs:getAll>\\n</soap-env:Body>\\n'`,`Get All Currency`)
    stringData = stringData.replaceAll(date,'');
    stringData = stringData.replaceAll(`\\n`,'');
    stringData = stringData.replaceAll(`</listAcct:account>`,``)
    stringData = stringData.replaceAll(`</platformCommon:billAddress2>`,``);
    stringData = stringData.replaceAll(`<platformCore:value`,`Value: `);
    stringData = stringData.replaceAll(`<platformCommon:comments/>`,``);
    stringData = stringData.replaceAll(`<setupCustom:defaultValue>`,`Default Value: `);
    stringData = stringData.replaceAll(`</setupCustom:defaultValue>`,``);
    stringData = stringData.replaceAll(`<platformCommon:fxAmount>`,`FX Amount: `);
    stringData = stringData.replaceAll(`</platformCommon:fxAmount>`,``);
    stringData = stringData.replaceAll(`<setupCustom:subtab`,`Custom Subtab: `);
    stringData = stringData.replaceAll(`</setupCustom:subtab>`,``);
    stringData = stringData.replaceAll(`<setupCustom:checkSpelling>`,`Check Spelling: `);
    stringData = stringData.replaceAll(`<setupCustom:bodySale>`,`Body Sale: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyJournal>`,`Body Journal: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyItemFulfillment>`,`Body Item Fulfillment: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyItemFulfillment>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyPickingTicket>`,`Body Picking Ticket: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyPickingTicket>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyJournal>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodySale>`,``);
    stringData = stringData.replaceAll(`</setupCustom:checkSpelling>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyPurchase>`,`Body Purchase: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyPurchase>`,``);
    stringData = stringData.replaceAll(`xsi:type="platformCore:LongCustomFieldRef`,`Custom Field Ref: `);
    stringData = stringData.replaceAll(`description>`,`Description: `);
    stringData = stringData.replaceAll(`<setupCustom:showInList>`,`Custom Show In List: `);
    stringData = stringData.replaceAll(`<setupCustom:globalSearch>`,`Global Search: `);
    stringData = stringData.replaceAll(`</listAcct:Description`,``);
    stringData = stringData.replaceAll(`<platformCommon:fxAmount/>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyItemReceipt>`,`Body Item Receipt: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyItemReceiptOrder>`,`Body Item Receipt Order: `);
    stringData = stringData.replaceAll(`</setupCustom:colStoreHidden>`,``);
    stringData = stringData.replaceAll(`Hidden>`,`Hidden: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyItemReceiptOrder>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyItemReceipt>`,``);
    stringData = stringData.replaceAll(`<setupCustom:isParent>`,`Custom is Parent: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyOpportunity>`,`Body Opportunity: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyExpenseReport>`,`Body Expense ReportL `);
    stringData = stringData.replaceAll(`</listAcct:department>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyExpenseReport>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyOpportunity>`,``); 
    stringData = stringData.replaceAll(`</setupCustom:isParent>`,``);
    stringData = stringData.replaceAll(`</setupCustom:globalSearch>`,``);
    stringData = stringData.replaceAll(`</setupCustom:showInList>`,``);
    stringData = stringData.replaceAll(`</listAcct:description>`,``);
    stringData = stringData.replaceAll(`</listAcct:category1099misc>`,``);
    stringData = stringData.replaceAll(`</listAcct:curDocNum>`,``);
    stringData = stringData.replaceAll(`curDocNum>`,``);
    stringData = stringData.replaceAll(`<soapenv:Header>`,'');
    stringData = stringData.replaceAll(`<platformMsgs:documentInfo xmlns:platformMsgs="urn:messages_2017_2.platform.webservices.netsuite.com">`,'');
    stringData = stringData.replaceAll(`<platformMsgs:nsId>`,'');
    stringData = stringData.replaceAll(`</platformMsgs:nsId>`,'');
    stringData = stringData.replaceAll(`</platformMsgs:documentInfo> `,'');
    stringData = stringData.replaceAll(`</soapenv:Header>`,'');
    stringData = stringData.replaceAll(`<soapenv:Body>`,'');
    stringData = stringData.replaceAll(`<getAllResponse xmlns="urn:messages_2017_2.platform.webservices.netsuite.com">`,'');
    stringData = stringData.replaceAll(`<platformCore:getAllResult xmlns:platformCore="urn:core_2017_2.platform.webservices.netsuite.com">`,'');
    stringData = stringData.replaceAll(`<platformCore:status isSuccess="true"/>`,'');
    stringData = stringData.replaceAll(`<platformCore:totalRecords>`,'Total Records: ');
    stringData = stringData.replaceAll(`</platformCore:totalRecords>`,'');
    stringData = stringData.replaceAll(`<platformCore:record xmlns:listAcct="urn:accounting_2017_2.lists.webservices.netsuite.com" internalId="`,`Record #`);
    stringData = stringData.replaceAll(`" xsi:type="listAcct:Currency">`,``);
    stringData = stringData.replaceAll(`<listAcct:name>`,'Name: ');
    stringData = stringData.replaceAll(`</listAcct:name>`,'');
    stringData = stringData.replaceAll(`<listAcct:symbol>`,'Symbol: ');
    stringData = stringData.replaceAll(`</listAcct:symbol>`,'');
    stringData = stringData.replaceAll(`<listAcct:isBaseCurrency>`,'Base Currency: ');
    stringData = stringData.replaceAll(`</listAcct:isBaseCurrency>`,'');
    stringData = stringData.replaceAll(`<listAcct:isInactive>`,`Inactive: `)
    stringData = stringData.replaceAll(`</listAcct:isInactive>`,``);
    stringData = stringData.replaceAll(`<platformCore:recordList>`,``);
    stringData = stringData.replaceAll(`</platformCore:recordList>`,``);
    stringData = stringData.replaceAll(`<listAcct:overrideCurrencyFormat>`,`Override Currency Format: `);
    stringData = stringData.replaceAll(`</listAcct:overrideCurrencyFormat>`,``);
    stringData = stringData.replaceAll(`<listAcct:displaySymbol>`,`Display Symbol: `);
    stringData = stringData.replaceAll(`<listAcct:symbolPlacement>`,`Placement: `);
    stringData = stringData.replaceAll(`<listAcct:locale>`,`Locale: `);
    stringData = stringData.replaceAll(`</listAcct:locale>`,``);
    stringData = stringData.replaceAll(`</listAcct:symbolPlacement>`,``);
    stringData = stringData.replaceAll(`</listAcct:displaySymbol>`,``);
    stringData = stringData.replaceAll(`<listAcct:formatSample>`,`Format Sample: `);
    stringData = stringData.replaceAll(`<listAcct:exchangeRate>`,`Exchange Rate: `);
    stringData = stringData.replaceAll(`<listAcct:fxRateUpdateTimezone>`,` Timezone: `);
    stringData = stringData.replaceAll(`<listAcct:currencyPrecision>`,`Currency Precision: `);
    stringData = stringData.replaceAll(`</platformCore:record>`,``);
    stringData = stringData.replaceAll(`</listAcct:currencyPrecision>`,``);   
    stringData = stringData.replaceAll(`</listAcct:fxRateUpdateTimezone>`,``)
    stringData = stringData.replaceAll(`</listAcct:exchangeRate>`,``)
    stringData = stringData.replaceAll(`</listAcct:formatSample>`,``);
    stringData = stringData.replaceAll(`</platformCore:getAllResult>`,``);
    stringData = stringData.replaceAll(`</getAllResponse>`,``);
    stringData = stringData.replaceAll(`</soapenv:Body></soapenv:Envelope>'`,``);
    stringData = stringData.replaceAll(`<platformMsgs:search>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:search>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:searchRecord`,``);
    stringData = stringData.replaceAll(`<platformCore:searchValue>`,`Search Value: `);
    stringData = stringData.replaceAll(`</platformCore:searchValue>`,``);
    stringData = stringData.replaceAll(`</platformCommon:type>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:searchRecord>`,``)
    stringData = stringData.replaceAll(`xmlns:ns1="urn:accounting_2017_2.lists.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="ns1:AccountSearch">`,``);
    stringData = stringData.replaceAll(`<ns0:basic xmlns:ns0="urn:accounting_2017_2.lists.webservices.netsuite.com">`,``);
    stringData = stringData.replaceAll(`<platformCore:pageSize>`,`Page size: `);
    stringData = stringData.replaceAll(`</platformCore:pageSize>`,``);
    stringData = stringData.replaceAll(`<platformCore:totalPages>`,`Total pages: `);
    stringData = stringData.replaceAll(`</platformCore:totalPages>`,``);
    stringData = stringData.replaceAll(`<platformCore:pageIndex>`,`Page Index: `);
    stringData = stringData.replaceAll(`<platformCore:searchId>`,`Search Id: `);
    stringData = stringData.replaceAll(`<platformCommon:type operator="anyOf">`,``);
    stringData = stringData.replaceAll(`</soap-env:Body>'`,``);
    stringData = stringData.replaceAll(`<platformCore:searchResult xmlns:platformCore="urn:core_2017_2.platform.webservices.netsuite.com">`,``);
    stringData = stringData.replaceAll(`<searchResponse xmlns="urn:messages_2017_2.platform.webservices.netsuite.com">`,``);
    stringData = stringData.replaceAll(`</platformCore:pageIndex>`,``);
    stringData = stringData.replaceAll(`</platformCore:searchId>`,``);
    stringData = stringData.replaceAll(`xsi:type="listAcct:Account">`,``);
    stringData = stringData.replaceAll(`<listAcct:acctType>`,`Acct Type: `);
    stringData = stringData.replaceAll(`<listAcct:acctNumber>`,`Acct Number: `);
    stringData = stringData.replaceAll(`<listAcct:acctName>`,`Acct Name: `);
    stringData = stringData.replaceAll(`</listAcct:acctName>`,``);  
    stringData = stringData.replaceAll(`</listAcct:acctNumber>`,``);
    stringData = stringData.replaceAll(`</listAcct:acctType>`,``);
    stringData = stringData.replaceAll(`internalId="`,`Internal Id: `);
    stringData = stringData.replaceAll(`<listAcct:currency`,`Currency: `);
    stringData = stringData.replaceAll(`">`,``);
    stringData = stringData.replaceAll(`<listAcct:includeChildren>`,``);
    stringData = stringData.replaceAll(`</listAcct:includeChildren>`,``);
    stringData = stringData.replaceAll(`<platformCore:name>`,`Name: `);
    stringData = stringData.replaceAll(`</platformCore:name>`,``);
    stringData = stringData.replaceAll(`</listAcct:currency>`,``);
    stringData = stringData.replaceAll(`<listAcct:generalRate>`,`Rate: `);
    stringData = stringData.replaceAll(`</listAcct:generalRate>`,``);
    stringData = stringData.replaceAll(`<listAcct:cashFlowRate>`,`Cash Flow Rate: `);
    stringData = stringData.replaceAll(`<listAcct:eliminate>`,`Eliminate: `);
    stringData = stringData.replaceAll(`</listAcct:eliminate>`,``);
    stringData = stringData.replaceAll(`</listAcct:cashFlowRate>`,``);
    stringData = stringData.replaceAll(`<listAcct:revalue>`,`Revalue: `);
    stringData = stringData.replaceAll(`<listAcct:customFieldList>`,``);
    stringData = stringData.replaceAll(`</listAcct:customFieldList>`,``);
    stringData = stringData.replaceAll(`</listAcct:revalue>`,``);
    stringData = stringData.replaceAll(`<platformCore:customField`,`Custom Field: `);
    stringData = stringData.replaceAll(`scriptId="custrecord_cps_bdc_lastupdatedbyimp_acc"`,``);
    stringData = stringData.replaceAll(`xsi:type="platformCore:BooleanCustomFieldRef`,``);
    stringData = stringData.replaceAll(`<platformCore:value>`,`Value: `);
    stringData = stringData.replaceAll(`</platformCore:value>`,``);
    stringData = stringData.replaceAll(`</platformCore:customField>`,``);
    stringData = stringData.replaceAll(`scriptId="custrecord_cps_bdc_updatedbyimp_acc"`,``);
    stringData = stringData.replaceAll(`</listAcct:parent>`,``);
    stringData = stringData.replaceAll(`<listAcct:`,``);
    stringData = stringData.replaceAll(`</platformCore:searchResult>`,``);
    stringData = stringData.replaceAll(`</searchMoreWithIdResponse>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:searchMoreWithId>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:searchId>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:pageIndex>`,`Page Index: `)
    stringData = stringData.replaceAll(`</platformMsgs:pageIndex>`,``);
    stringData = stringData.replaceAll(`</searchResponse>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:searchMoreWithId>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:searchId>`,``);
    stringData = stringData.replaceAll(`xmlns:ns0="urn:accounting_2017_2.lists.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="ns0:TermSearch"/>`,``);
    stringData = stringData.replaceAll(`xsi:type="listAcct:Term`);
    stringData = stringData.replaceAll(`<searchMoreWithIdResponse`,``);
    stringData = stringData.replaceAll(`xmlns="urn:messages_2017_2.platform.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`daysUntilNetDue>`,`Days Until Net Due: `);
    stringData = stringData.replaceAll(`</listAcct:daysUntilNetDue>`,``);
    stringData = stringData.replaceAll(`</listAcct:Days Until Net Due:`,``);
    stringData = stringData.replaceAll(`</listAcct:preferred>`,``);
    stringData = stringData.replaceAll(`preferred>`,`Preferred: `);
    stringData = stringData.replaceAll(`</listAcct:discountPercent>`,``);
    stringData = stringData.replaceAll(`</listAcct:daysUntilExpiry>`,``);
    stringData = stringData.replaceAll(`discountPercent>`,`Discount Percent: `);
    stringData = stringData.replaceAll(`xsi:type="ns0:PaymentMethodSearch"/>`,``);
    stringData = stringData.replaceAll(`xsi:type="listAcct:PaymentMethod`,``);
    stringData = stringData.replaceAll(`</listAcct:undepFunds>`,``);
    stringData = stringData.replaceAll(`undepFunds>`,`Undeposited Funds: `);
    stringData = stringData.replaceAll(`</listAcct:isOnline>`,``);
    stringData = stringData.replaceAll(`isOnline>`,`Is Online: `);
    stringData = stringData.replaceAll(`</listAcct:isDebitCard>`,``);
    stringData = stringData.replaceAll(`isDebitCard>`,`Is Debit Card: `);
    stringData = stringData.replaceAll(`xsi:type="ns1:ItemSearch`,``);
    stringData = stringData.replaceAll(`</platformCommon:subType>`);
    stringData = stringData.replaceAll(`<platformCore:recordList/>`,`Record List: `);
    stringData = stringData.replaceAll(`<platformCommon:lastModifiedDate operator="after`,`Last Modified Date, after`);
    stringData = stringData.replaceAll(`</platformCommon:lastModifiedDate>`,``);
    stringData = stringData.replaceAll(`<platformCommon:subType operator="noneOf`,``);
    stringData = stringData.replaceAll(`xmlns:ns2="urn:relationships_2017_2.lists.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`<ns0:criteria`,``)
    stringData = stringData.replaceAll(`<ns0:basic>`,``)
    stringData = stringData.replaceAll(`</ns0:basic>`,``)
    stringData = stringData.replaceAll(`<platformCommon:companyName>`,`Company Name: `);
    stringData = stringData.replaceAll(`<platformCommon:internalId>`,`Internal Id: `);
    stringData = stringData.replaceAll(`</platformCommon:internalId>`,``);
    stringData = stringData.replaceAll(`</platformCommon:companyName>`,``);
    stringData = stringData.replaceAll(`<platformCommon:lastModifiedDate>`,`Last Modified Date`);
    stringData = stringData.replaceAll(`</platformCommon:lastModifiedDate>`,``);
    stringData = stringData.replaceAll(`<platformCommon:parent>`,``);
    stringData = stringData.replaceAll(`</platformCommon:parent>`,``);
    stringData = stringData.replaceAll(`</listRel:basic>`,``);
    stringData = stringData.replaceAll(`</platformCore:searchRow>`,``);
    stringData = stringData.replaceAll(`<platformCore:searchValue`,`Search Value`);
    stringData = stringData.replaceAll(`<platformCommon:parent/>`,``)
    stringData = stringData.replaceAll(`daysUntilExpiry>`,`Days Until Expiry: `);
    stringData = stringData.replaceAll(`xsi:type="ns2:CustomerSearchAdvanced`,``);
    stringData = stringData.replaceAll(`vxmlns:ns0="urn:relationships_2017_2.lists.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`<platformCommon:stage operator="anyOf`,``);
    stringData = stringData.replaceAll(`</platformCommon:stage>`,``);
    stringData = stringData.replaceAll(`</ns0:criteria>`,``);
    stringData = stringData.replaceAll(`<ns1:columns xmlns:ns1="urn:relationships_2017_2.lists.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`<ns1:basic>`,``);
    stringData = stringData.replaceAll(`</ns1:basic>`,``);
    stringData = stringData.replaceAll(`<platformCommon:accountNumber/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:companyName/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:internalId/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:lastModifiedDate/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:resaleNumber/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:terms/>`,``);
    stringData = stringData.replaceAll(`<platformCore:searchRow xmlns:listRel="urn:relationships_2017_2.lists.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="listRel:CustomerSearchRow`,``);
    stringData = stringData.replaceAll(`<listRel:basic xmlns:platformCommon="urn:common_2017_2.platform.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`xmlns:ns0="urn:relationships_2017_2.lists.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`<platformCore:searchRowList>`,``);
    stringData = stringData.replaceAll(`</platformCore:searchRowList>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:addList>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:record xmlns:ns6="urn:relationships_2017_2.lists.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="ns6:Customer`,``);
    stringData = stringData.replaceAll(`</platformMsgs:addList>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:updateList>`,`Update List: `);
    stringData = stringData.replaceAll(`</platformMsgs:updateList>`,``);
    stringData = stringData.replaceAll(`<platformCommon:state>`,`State: `);
    stringData = stringData.replaceAll(`</platformCommon:state>`,``);
    stringData = stringData.replaceAll(`<platformCommon:city>`,`City: `);
    stringData = stringData.replaceAll(`</platformCommon:city>`,``);
    stringData = stringData.replaceAll(`<platformCommon:addr1>`,`Address 1: `);
    stringData = stringData.replaceAll(`<platformCommon:addr2>`,`Address 2: `);
    stringData = stringData.replaceAll(`</platformCommon:addr2>`,``);
    stringData = stringData.replaceAll(`</platformCommon:addr1>`,``);
    stringData = stringData.replaceAll(`<platformCommon:country>`,`Country: `);
    stringData = stringData.replaceAll(`</platformCommon:country>`,``);
    stringData = stringData.replaceAll(`<platformCommon:zip>`,`Zip Code: `);
    stringData = stringData.replaceAll(`</platformCommon:zip>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:record>`,``);
    stringData = stringData.replaceAll(`<addListResponse`,``);
    stringData = stringData.replaceAll(`<writeResponseList>`,`Write Response List: `);
    stringData = stringData.replaceAll(`</writeResponseList>`,``);
    stringData = stringData.replaceAll(`<writeResponse>`,`Write Response: `);
    stringData = stringData.replaceAll(`</writeResponse>`,``);
    stringData = stringData.replaceAll(`<platformCore:status xmlns:platformCore="urn:core_2017_2.platform.webservices.netsuite.com"`,`Status: `);
    stringData = stringData.replaceAll(`isSuccess="true"/>`,`Success: True`);
    stringData = stringData.replaceAll(`<baseRef xmlns:platformCore="urn:core_2017_2.platform.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="platformCore:RecordRef"/>`,``);
    stringData = stringData.replaceAll(`</addListResponse>`,``);
    stringData = stringData.replaceAll(`type="customer"`,`Type: Customer`);
    stringData = stringData.replaceAll(`<updateListResponse`,`Update List Response: `);
    stringData = stringData.replaceAll(`</updateListResponse>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:getDeleted>`,`Get Deleted `);
    stringData = stringData.replaceAll(`<platformMsgs:getDeletedFilter>`,`Filter`);
    stringData = stringData.replaceAll(`<platformCore:deletedDate operator="after`,`Date after`);
    stringData = stringData.replaceAll(`</platformMsgs:getDeletedFilter>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:getDeleted>`,``);
    stringData = stringData.replaceAll(`</platformCore:deletedDate>`,``);
    stringData = stringData.replaceAll(`<platformCore:type operator="anyOf`,`Any`);
    stringData = stringData.replaceAll(`</platformCore:type>`,``);
    stringData = stringData.replaceAll(`<getDeletedResponse`,`Get Deleted Response: `);
    stringData = stringData.replaceAll(`<platformCore:getDeletedResult`,`Result: `);
    stringData = stringData.replaceAll(`xmlns:platformCore="urn:core_2017_2.platform.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`<platformCore:deletedRecordList/>`,``);
    stringData = stringData.replaceAll(`</platformCore:getDeletedResult>`,``);
    stringData = stringData.replaceAll(`</getDeletedResponse>`,``);
    stringData = stringData.replaceAll(`savedSearchId=`,`Search Id: `);
    stringData = stringData.replaceAll(`<platformCommon:recordType operator="is`,``);
    stringData = stringData.replaceAll(`<platformCommon:mainLine>`,``);
    stringData = stringData.replaceAll(`<platformCommon:amountPaid/>`,`Amount paid: `);
    stringData = stringData.replaceAll(`</platformCommon:mainLine>`,``);
    stringData = stringData.replaceAll(`<platformCommon:amountRemaining/>`,`Amount Remaining: `);
    stringData = stringData.replaceAll(`<platformCommon:billAddress1/>`,`Bill Address 1: `);
    stringData = stringData.replaceAll(`<platformCommon:billAddress2/>`,`Bill Address 2: `);
    stringData = stringData.replaceAll(`<platformCommon:billAddress3/>`,`Bill Address 3: `);
    stringData = stringData.replaceAll(`<platformCommon:billCity/>`,`Bill City: `);
    stringData = stringData.replaceAll(`<platformCommon:billCountry/>`,`Bill Country: `);
    stringData = stringData.replaceAll(`<platformCommon:billState/>`,`Bill State: `);
    stringData = stringData.replaceAll(`<platformCommon:billZip/>`,`Bill Zip Code: `);
    stringData = stringData.replaceAll(`<platformCommon:currency/>`,`Currency: `);
    stringData = stringData.replaceAll(`<platformCommon:dueDate/>`,`Due Date: `);
    stringData = stringData.replaceAll(`<platformCommon:entity/>`,`Entity: `);
    stringData = stringData.replaceAll(`<platformCommon:exchangeRate/>`,`Exchange Rate: `);
    stringData = stringData.replaceAll(`<platformCommon:memoMain/>`,`Memo Main: `);
    stringData = stringData.replaceAll(`<platformCommon:netAmountNoTax/>`,`Net Amount No Tax: `);
    stringData = stringData.replaceAll(`<platformCommon:otherRefNum/>`,`Other Ref Number: `);
    stringData = stringData.replaceAll(`<platformCommon:shipAddress1/>`,`Ship Address 1: `);
    stringData = stringData.replaceAll(`<platformCommon:shipAddress2/>`,`Ship Address 2: `);
    stringData = stringData.replaceAll(`<platformCommon:shipAddress3/>`,`Ship Address 3: `);
    stringData = stringData.replaceAll(`<platformCommon:shipCity/>`,`Ship City: `);
    stringData = stringData.replaceAll(`<platformCommon:shipCountry/>`,`Ship Country: `);
    stringData = stringData.replaceAll(`<platformCommon:shipDate/>`,`Ship Date: `);
    stringData = stringData.replaceAll(`<platformCommon:shipState/>`,`Ship State: `);
    stringData = stringData.replaceAll(`<platformCommon:shipZip/>`,`Ship Zip Code: `);
    stringData = stringData.replaceAll(`<platformCommon:taxTotal/>`,`Tax Total: `); 
    stringData = stringData.replaceAll(`<platformCommon:tranDate/>`,`Transaction Date: `);
    stringData = stringData.replaceAll(`<platformCommon:tranId/>`,`Transaction Id: `);
    stringData = stringData.replaceAll(`</platformCommon:recordType>`,``);
    stringData = stringData.replaceAll(`platformCore:searchRow xmlns:tranSales="urn:sales_2017_2.transactions.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="tranSales:TransactionSearchRow`,``);
    stringData = stringData.replaceAll(`<tranSales:basic`,``);
    stringData = stringData.replaceAll(`xmlns:platformCommon="urn:common_2017_2.platform.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`<platformCommon:amountPaid>`,`Amount Paid: `);
    stringData = stringData.replaceAll(`<platformCommon:amountRemaining>`,`Amount Remaining`);
    stringData = stringData.replaceAll(`<platformCommon:billCity>`,`Bill City: `);
    stringData = stringData.replaceAll(`<platformCommon:billCountry>`,`Bill Country: `);
    stringData = stringData.replaceAll(`<platformCommon:billState>`,`Bill State: `);
    stringData = stringData.replaceAll(`<platformCommon:billZip>`,`Bill Zip: `);
    stringData = stringData.replaceAll(`<platformCommon:currency>`,`Currency: `);
    stringData = stringData.replaceAll(`<platformCommon:dueDate>`,`Due Date: `);
    stringData = stringData.replaceAll(`<platformCommon:entity>`,`Entity: `);
    stringData = stringData.replaceAll(`<platformCommon:exchangeRate>`,`Exchange Rate: `);
    stringData = stringData.replaceAll(`<platformCommon:shipCity>`,`Ship City: `);
    stringData = stringData.replaceAll(`<platformCommon:shipCountry>`,`Ship Country: `)
    stringData = stringData.replaceAll(`<platformCommon:shipDate>`,`Ship Date`);
    stringData = stringData.replaceAll(`</platformCommon:shipDate>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:shipCountry>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:shipCity>`,``)      
    stringData = stringData.replaceAll(`</platformCommon:exchangeRate>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:entity>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:dueDate>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:currency>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:billZip>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:billState>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:billCountry>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:billCity>`,``)      
    stringData = stringData.replaceAll(`</platformCommon:amountRemaining>`,``)  
    stringData = stringData.replaceAll(`</platformCommon:amountPaid>`,``)  
    stringData = stringData.replaceAll(`<platformCommon:shipState>`,`Shipping State:`)
    stringData = stringData.replaceAll(`</platformCommon:shipState>`,``);
    stringData = stringData.replaceAll(`<platformCommon:shipZip>`,`Shipping Zip Code: `);
    stringData = stringData.replaceAll(`<platformCommon:tranId>`,`Transaction Id: `);
    stringData = stringData.replaceAll(`<platformCommon:shipAddress1>`,`Shipping Address 1: `);
    stringData = stringData.replaceAll(`</platformCommon:shipAddress1>`,``);
    stringData = stringData.replaceAll(`</platformCommon:tranId>`,``);
    stringData = stringData.replaceAll(`</platformCommon:shipZip>`,``);
    stringData = stringData.replaceAll(`<platformCommon:tranDate>`,`Transaction Date: `);
    stringData = stringData.replaceAll(`</tranSales:basic>`,``);
    stringData = stringData.replaceAll(`</platformCommon:tranDate>`,``);
    stringData = stringData.replaceAll(`<platformCommon:terms>`,``);
    stringData = stringData.replaceAll(`<platformCommon:internalId operator="anyOf`,``);
    stringData = stringData.replaceAll(`</platformCommon:terms>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:getList>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:baseRef`,``);
    stringData = stringData.replaceAll(`<getListResponse`,``);
    stringData = stringData.replaceAll(`<readResponseList>`,``);
    stringData = stringData.replaceAll(`<readResponse>`,`Response: `);
    stringData = stringData.replaceAll(`</readResponse>`,``);
    stringData = stringData.replaceAll(`</readResponseList>`,``);
    stringData = stringData.replaceAll(`type="transactionColumnCustomField"`,`Transaction Column Custom Field: `);
    stringData = stringData.replaceAll(`xsi:type="platformCore:CustomizationRef"/>`,``);
    stringData = stringData.replaceAll(`</platformMsgs:getList>`,``)
    stringData = stringData.replaceAll(`<platformCommon:memo operator="isNot`,``);
    stringData = stringData.replaceAll(`</platformCommon:memo>`,``)
    stringData = stringData.replaceAll(`<platformCommon:item/>`,`Item: `);
    stringData = stringData.replaceAll(`<platformCommon:line/>`,`Line: `);
    stringData = stringData.replaceAll(`<platformCommon:memo/>`,`Memo: `);
    stringData = stringData.replaceAll(`<platformCommon:amount>`,`Amount: `);
    stringData = stringData.replaceAll(`<platformCommon:amount/>`,`Amount: `);
    stringData = stringData.replaceAll(`<platformCommon:quantity/>`,`Quantity: `);
    stringData = stringData.replaceAll(`</platformCommon:amount>`,``);
    stringData = stringData.replaceAll(`<platformCommon:item>`,`Item: `);
    stringData = stringData.replaceAll(`<platformCommon:line>`,`Line: `);
    stringData = stringData.replaceAll(`</platformCommon:line>`,``);
    stringData = stringData.replaceAll(`</platformCommon:item>`,``);
    stringData = stringData.replaceAll(`<platformCommon:memo>`,`Memo: `);
    stringData = stringData.replaceAll(`<platformCommon:quantity>`,`Quantity: `);
    stringData = stringData.replaceAll(`</platformCommon:quantity>`,``);
    stringData = stringData.replaceAll(`<setupCustom:label>`,`Custom Label: `);
    stringData = stringData.replaceAll(`<setupCustom:owner`,`Custom Owner: `);
    stringData = stringData.replaceAll(`<setupCustom:storeValue>`,`Custom Store Value: `);
    stringData = stringData.replaceAll(`<setupCustom:displayType>`,`Custom Display Type: `);
    stringData = stringData.replaceAll(`<setupCustom:isMandatory>`,`Custom is Mandatory: `);
    stringData = stringData.replaceAll(`<setupCustom:defaultChecked>`,`Custom Default Checked: `)
    stringData = stringData.replaceAll(`<setupCustom:isFormula>`,`Custom Is Formula: `)
    stringData = stringData.replaceAll(`<setupCustom:colExpense>`,`Custom Expenses: `);
    stringData = stringData.replaceAll(`</setupCustom:colExpense>`,``);        
    stringData = stringData.replaceAll(`<setupCustom:colPurchase>`,`Custom Purchases: `);
    stringData = stringData.replaceAll(`</setupCustom:colPurchase>`,``);           
    stringData = stringData.replaceAll(`<setupCustom:colSale>`,`Custom Sale: `);
    stringData = stringData.replaceAll(`</setupCustom:colSale>`,``);          
    stringData = stringData.replaceAll(`<setupCustom:colJournal>`,`Custom Journal: `);
    stringData = stringData.replaceAll(`</setupCustom:colJournal>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colExpenseReport>`,`Custom Expense Report: `);
    stringData = stringData.replaceAll(`</setupCustom:colExpenseReport>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colItemReceipt>`,`Item Receipt: `);
    stringData = stringData.replaceAll(`</setupCustom:colItemReceipt>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colItemReceiptOrder>`,`Custom Item Receipt Order: `);
    stringData = stringData.replaceAll(`</setupCustom:colItemReceiptOrder>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colItemFulfillment>`,`Custom Item Fulfillment: `);
    stringData = stringData.replaceAll(`</setupCustom:colItemFulfillment>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colItemFulfillmentOrder>`,`Custom Item Fulfillment Order: `);
    stringData = stringData.replaceAll(`</setupCustom:colItemFulfillmentOrder>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colPrintFlag>`,`Custom Print Flag: `);
    stringData = stringData.replaceAll(`</setupCustom:colPrintFlag>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colPickingTicket>`,`Custom Picking Ticket: `);
    stringData = stringData.replaceAll(`</setupCustom:colPickingTicket>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colPackingSlip>`,`Custom Packing Slip: `);
    stringData = stringData.replaceAll(`</setupCustom:colPackingSlip>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colReturnForm>`,`Custom Return Form: `);
    stringData = stringData.replaceAll(`</setupCustom:colReturnForm>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colStoreWithGroups>`,`Custom Store With Groups: `);
    stringData = stringData.replaceAll(`</setupCustom:colStoreWithGroups>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colGroupOnInvoices>`,`Custom Group On Invoices: `);
    stringData = stringData.replaceAll(`</setupCustom:colGroupOnInvoices>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:colKitItem>`,`Custom Kit Item: `);
    stringData = stringData.replaceAll(`</setupCustom:colKitItem>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:accessLevel>`,`Custom Access Level: `);
    stringData = stringData.replaceAll(`</setupCustom:accessLevel>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:searchLevel>`,`Custom Search Level: `);
    stringData = stringData.replaceAll(`</setupCustom:searchLevel>`,``);            
    stringData = stringData.replaceAll(`<setupCustom:fieldType>`,`Custom Field Type: `);
    stringData = stringData.replaceAll(`</setupCustom:fieldType>`,``);            
    stringData = stringData.replaceAll(`</setupCustom:isFormula>`,``);
    stringData = stringData.replaceAll(`</setupCustom:defaultChecked>`,``);
    stringData = stringData.replaceAll(`</setupCustom:isMandatory>`,``);
    stringData = stringData.replaceAll(`</setupCustom:displayType>`,``);
    stringData = stringData.replaceAll(`</setupCustom:storeValue>`,``);
    stringData = stringData.replaceAll(`</setupCustom:label>`,``);
    stringData = stringData.replaceAll(`</setupCustom:owner>`,``);
    stringData = stringData.replaceAll(`<record xmlns:setupCustom="urn:customization_2017_2.setup.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`xsi:type="setupCustom:TransactionColumnCustomField`,``);
    stringData = stringData.replaceAll(`<setupCustom:scriptId>`,`Custom Script Id: `);
    stringData = stringData.replaceAll(`</setupCustom:scriptId>`,``);
    stringData = stringData.replaceAll(`</record>`,``);
    stringData = stringData.replaceAll(`</getListResponse>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:record`,`Record: `);
    stringData = stringData.replaceAll(`xsi:type="platformCore:DateCustomFieldRef`,``);
    stringData = stringData.replaceAll(`<platformCore:customizationRef>`,`Customization Reference: `);
    stringData = stringData.replaceAll(`</platformCore:customizationRef>`,``);
    stringData = stringData.replaceAll(`<soapenv:Fault>`,`Fault: `);
    stringData = stringData.replaceAll(`<faultcode>`,`Fault Code: `);
    stringData = stringData.replaceAll(`urn:customers_2017_2.transactions.webservices.netsuite.com"`,``);
    stringData = stringData.replaceAll(`<platformCommon:applyingTransaction/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:class/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:dateCreated/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:externalId/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:lineUniqueKey/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:mainLine/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:mainName/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:message/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:payingAmount/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:paymentApproved/>`,``)
    stringData = stringData.replaceAll(`</faultcode>`,``);
    stringData = stringData.replaceAll(`<platformCommon:paymentMethod/>`,``)          
    stringData = stringData.replaceAll(`<platformCommon:recordType/>`,``)          
    stringData = stringData.replaceAll(`<platformCommon:refNumber/>`,``)          
    stringData = stringData.replaceAll(`<platformCommon:status/>`,``)          
    stringData = stringData.replaceAll(`<platformCommon:title/>`,``)          
    stringData = stringData.replaceAll(`<platformCommon:total/>`,``)
    stringData = stringData.replaceAll(`<platformCommon:tranIsVsoeBundle/>`,``)         
    stringData = stringData.replaceAll(`<platformCommon:transactionDiscount/>`,``)         
    stringData = stringData.replaceAll(`<platformCommon:transactionLineType/>`,``)          
    stringData = stringData.replaceAll(`<platformCommon:transactionNumber/>`,``)         
    stringData = stringData.replaceAll(`<platformCommon:type/> `,``)        
    stringData = stringData.replaceAll(`<platformCore:searchRowList/>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyItemFulfillmentOrder>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyPrintFlag>`,`Body Print Flag: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyVendorPayment>`,`Body Vendor Payments: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyVendorPayment>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyOtherTransaction>`,`Body Other Transaction: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyDeposit>`,`Body Deposit`);
    stringData = stringData.replaceAll(`<setupCustom:bodyPrintStatement>`,`Body Print Statement: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyPrintStatement>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyDeposit>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyOtherTransaction>`,``);
    stringData = stringData.replaceAll(`<setupCustom:bodyPrintPackingSlip>`,`Body Print Packing Slip: `);
    stringData = stringData.replaceAll(`<setupCustom:bodyCustomerPayment>`,`Body Customer Payment: `);
    stringData = stringData.replaceAll(`</setupCustom:bodyCustomerPayment>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyPrintPackingSlip>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyPrintFlag>`,``);
    stringData = stringData.replaceAll(`</setupCustom:bodyItemFulfillmentOrder>`,``);
    stringData = stringData.replaceAll(`</soapenv:Fault>`,``);
    stringData = stringData.replaceAll(`<faultstring>`,`Fault Text: `);
    stringData = stringData.replaceAll(`<detail>`,`Detail: `);
    stringData = stringData.replaceAll(`</detail>`,``);
    stringData = stringData.replaceAll(`</faultstring>`,``);
    stringData = stringData.replaceAll(`{urn:types.common_2017_2.platform.webservices.netsuite.com}`,``);
    stringData = stringData.replaceAll(`<platformMsgs:getCustomizationId>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:includeInactives>`,`Includes Inactives: `);        
    stringData = stringData.replaceAll(`</platformMsgs:includeInactives>`,``);
    stringData = stringData.replaceAll(`<platformMsgs:customizationType`,`Customization Type: `);
    stringData = stringData.replaceAll(`getCustomizationType="transactionBodyCustomField`,`Transaction Body Custom Field: `);
    stringData = stringData.replaceAll(`</platformMsgs:getCustomizationId>`,``);
    stringData = stringData.replaceAll(`<getCustomizationIdResponse`,`Get Customization Id Response: `);
    stringData = stringData.replaceAll(`<platformCore:getCustomizationIdResult`,`Get Customization Id Result: `);
    stringData = stringData.replaceAll(`<platformCore:customizationRefList>`,`Reference List: `);
    stringData = stringData.replaceAll(`</platformCore:customizationRefList>`,``);
    stringData = stringData.replaceAll(`<platformCore:customizationRef`,`Customization Reference: `);
    stringData = stringData.replaceAll(`</platformCore:getCustomizationIdResult>`,``);
    stringData = stringData.replaceAll(`</getCustomizationIdResponse>`,``);
    stringData = stringData.replaceAll(`<platformCommon:createdFrom/>`,``);
    stringData = stringData.replaceAll(`urn:customers_2017_2.transactions.webservices.netsuite.com`,``);
    stringData = stringData.replaceAll(`<platformCore:statusDetail type="ERROR`,`ERROR: `);
    stringData = stringData.replaceAll(`<platformCore:code>`,`Code: `);
    stringData = stringData.replaceAll(`<platformCore:message>`,`Message: `);
    stringData = stringData.replaceAll(`</platformCore:statusDetail>`,`Status Detail: `);
    stringData = stringData.replaceAll(`</platformCore:status>`,``);
    stringData = stringData.replaceAll(`</platformCore:message>`,``);
    stringData = stringData.replaceAll(`</platformCore:code>`,``);
    stringData = stringData.replaceAll(`<platformCommon:dateCreated>`,`Date Created: `);
    stringData = stringData.replaceAll(`<platformCommon:lineUniqueKey>`,`Line Unique Key: `);
    stringData = stringData.replaceAll(`<platformCommon:mainName>`,`Main Name: `);
    stringData = stringData.replaceAll(`<platformCommon:recordType>`,`Record Type: `);
    stringData = stringData.replaceAll(`<platformCommon:status>`,`Status: `);
    stringData = stringData.replaceAll(`<platformCommon:total>`,`Total: `);
    stringData = stringData.replaceAll(`<platformCommon:transactionDiscount>`,`Transaction Discount: `);
    stringData = stringData.replaceAll(`<platformCommon:transactionNumber>`,`Transaction Number: `);
    stringData = stringData.replaceAll(`</platformCommon:transactionNumber>`,``)
    stringData = stringData.replaceAll(`</platformCommon:transactionDiscount>`,``)
    stringData = stringData.replaceAll(`</platformCommon:total>`,``)
    stringData = stringData.replaceAll(`</platformCommon:status>`,``)
    stringData = stringData.replaceAll(`</platformCommon:createdFrom>`,``);
    stringData = stringData.replaceAll(`<platformCommon:createdFrom>`,`Created From: `);
    stringData = stringData.replaceAll(`<platformCommon:billAddress2>`,`Bill Address 2: `);
    stringData = stringData.replaceAll(`</platformCommon:recordType>`,``)
    stringData = stringData.replaceAll(`</platformCommon:mainName>`,``)
    stringData = stringData.replaceAll(`<platformCommon:customFieldList>`,`Custom Field List: `);
    stringData = stringData.replaceAll(`<setupCustom:help>`,`Help: `);
    stringData = stringData.replaceAll(`<setupCustom:colStore`,`Store: `);
    stringData = stringData.replaceAll(`<setupCustom:Description`,`Description: `);
    stringData = stringData.replaceAll(`</setupCustom:Description`,``);
    stringData = stringData.replaceAll(`</setupCustom:help>`,``);
    stringData = stringData.replaceAll(`</platformCommon:customFieldList>`,``);
    stringData = stringData.replaceAll(`</platformCommon:lineUniqueKey>`,``)
    stringData = stringData.replaceAll(`</platformCommon:dateCreated>`,``)
    stringData = stringData.replaceAll(`<platformCommon:type>`,`Type: `);
    stringData = stringData.replaceAll(`<platformCommon:applyingTransaction>`,`Applying Transaction: `);
    stringData = stringData.replaceAll(`</platformCommon:applyingTransaction>`,``);
    stringData = stringData.replaceAll(`<platformCommon:payingAmount>`,`Paying Amount: `);
    stringData = stringData.replaceAll(`</tranSales:appliedToTransactionJoin>`,``);
    stringData = stringData.replaceAll(`<tranSales:appliedToTransactionJoin`,`Applied to Transaction Join: `);
    stringData = stringData.replaceAll(`</platformCommon:payingAmount>`,``);
    stringData = stringData.replaceAll(`<platformCommon:customFieldList/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:payingTransaction`,`Paying Transaction: `);
    stringData = stringData.replaceAll(`</platformCommon:payingTransaction>`,``);
    stringData = stringData.replaceAll(`<platformCommon:applyingTransaction`,`Applying Transaction: `);
    stringData = stringData.replaceAll(`<platformCommon:paymentMethod>`,`Payment Method: `);
    stringData = stringData.replaceAll(`<platformCommon:grossAmount>`,`Gross Amount: `);
    stringData = stringData.replaceAll(`<platformCommon:memoMain>`,`Memo Main: `);
    stringData = stringData.replaceAll(`<platformCommon:netAmountNoTax>`,`Net Amount No Tax`);
    stringData = stringData.replaceAll(`</platformCommon:netAmountNoTax>`,``)
    stringData = stringData.replaceAll(`</platformCommon:memoMain>`,``)
    stringData = stringData.replaceAll(`</platformCommon:grossAmount>`,``)
    stringData = stringData.replaceAll(`</platformCommon:paymentMethod>`,``)
    stringData = stringData.replaceAll(`<platformCommon:grossAmount/>`,``);
    stringData = stringData.replaceAll(`<platformCommon:otherRefNum>`,`Other Ref Num: `);
    stringData = stringData.replaceAll(`<platformCommon:taxTotal>`,`Tax Total: `);
    stringData = stringData.replaceAll(`</platformCommon:taxTotal>`,``);
    stringData = stringData.replaceAll(`<platformCommon:billAddress1>`,`Bill Address 1: `);
    stringData = stringData.replaceAll(`<platformCommon:shipAddress2>`,`Ship Address 2: `);
    stringData = stringData.replaceAll(`</platformCommon:shipAddress2>`,``);
    stringData = stringData.replaceAll(`</platformCommon:billAddress1>`,``);
    stringData = stringData.replaceAll(`</platformCommon:otherRefNum>`,``)
    // initializing max at 0 until n values are found
    let max=0
    // using a map initally for the has and set functionallity in an attempt to optimize time
    let nValues = new Map();
    function findMax(regex){
        stringData.replaceAll(regex,match=>{
            let numberFromRegex = match[2];
            if(match[3])
            {numberFromRegex +=match[3];}
            if(match[4]){
                numberFromRegex +=match[4]
            }
            if(match[5]){
                numberFromRegex +=match[5]
            }
            matchInt = parseInt(numberFromRegex);
            if(nValues.has(matchInt)){
            }
            else{
                nValues.set(matchInt,matchInt);
            }
            if(matchInt>max){
                max = matchInt;
            }
            return match
        })
    }
    let nValueArray=[]    
    // finding the maximum n value to optimize the process time
    let regex = /ns\d/ig;
    findMax(regex);
    regex = /ns\d\d/ig;
    findMax(regex);
    regex = /ns\d\d\d/ig;
    findMax(regex);
    regex = /ns\d\d\d\d/ig;
    findMax(regex);
    // turning the map to an array
    nValues.forEach(function(value) {
        nValueArray.push(value);
    })
    // going through the n values present
    for(let i in nValueArray){
        stringData = stringData.replaceAll(`<ns${i}:addressbookAddress>`,`Address Book Address: `);
        stringData = stringData.replaceAll(`</ns${i}:addressbookAddress>`,``);
        stringData = stringData.replaceAll(`<ns${i}:customer`,`Customer: `)
        stringData = stringData.replaceAll(`<ns${i}:payment`,`Payment: `);
        stringData = stringData.replaceAll(`</ns${i}:payment>`,``);
        stringData = stringData.replaceAll(`<ns${i}:companyName xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com`,`Company Name: `);
        stringData = stringData.replaceAll(`<ns${i}:addressbook>`, `Address Book`);
        stringData = stringData.replaceAll(`</ns${i}:addressbook>`,``);
        stringData = stringData.replaceAll(`<ns${i}:companyName`,`Company Name: `);
        stringData = stringData.replaceAll(`</ns${i}:companyName>`,``);
        stringData = stringData.replaceAll(`<ns${i}:appliedToTransactionJoin>`,`Applied to Transaction to Join: `);
        stringData = stringData.replaceAll(`</ns${i}:appliedToTransactionJoin>`,``);
        stringData = stringData.replaceAll(`<ns${i}:pnRefNum`,`pn Ref Num: `);
        stringData = stringData.replaceAll(`</ns${i}:pnRefNum>`,``);
        stringData = stringData.replaceAll(`<ns${i}:subsidiary`,`Subsidiary: `);
        stringData = stringData.replaceAll(`<ns${i}:applyList`,`Apply List: `);
        stringData = stringData.replaceAll(`<ns${i}:apply>`,`Apply: `);
        stringData = stringData.replaceAll(`</ns${i}:apply>`,``);
        stringData = stringData.replaceAll(`<ns${i}:doc>`,`Doc: `);
        stringData = stringData.replaceAll(`</ns${i}:doc>`,``);
        stringData = stringData.replaceAll(`</ns${i}:applyList>`,``);
        stringData = stringData.replaceAll(`<ns${i}:Description`,`Description: `);
        stringData = stringData.replaceAll(`</ns${i}:Description`,``);
        stringData = stringData.replaceAll(`<ns${i}:revRecEndDate>`,`Rev Rec End Date: `);
        stringData = stringData.replaceAll(`<ns${i}:location`,`Location: `);
        stringData = stringData.replaceAll(`</ns${i}:revRecEndDate>`,``);
        stringData = stringData.replaceAll(`<ns${i}:revRecStartDate>`,`Rev Rec Start Date: `);
        stringData = stringData.replaceAll(`<ns${i}:customFieldList`,`Custom Field List: `);
        stringData = stringData.replaceAll(`</ns${i}:revRecStartDate>`,``);
        stringData = stringData.replaceAll(`</ns${i}:basic>`,``);
        stringData = stringData.replaceAll(`</ns${i}:columns>`,``);
        stringData = stringData.replaceAll(`<ns${i}:appliedToTransactionJoin/>`,``);
        stringData = stringData.replaceAll(`<ns${i}:parent xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com"/>`,`Parent: `);
        stringData = stringData.replaceAll(`<ns${i}:email xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com`,`Email: `);
        stringData = stringData.replaceAll(`</ns${i}:email>`,``);
        stringData = stringData.replaceAll(`<ns${i}:comments xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com`,`Comments: `);
        stringData = stringData.replaceAll(`</ns${i}:comments>`,``);
        stringData = stringData.replaceAll(`<ns${i}:stage xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com_customer`,`Stage: `);
        stringData = stringData.replaceAll(`</ns${i}:stage>`,``);
        stringData = stringData.replaceAll(`<ns${i}:addressbookList xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com"`,`Address Book List: `);
        stringData = stringData.replaceAll(`replaceAll="true`,``);
        stringData = stringData.replaceAll(`<ns${i}:defaultBilling>`,`Default Billing: `);
        stringData = stringData.replaceAll(`</ns${i}:defaultBilling>`,``);
        stringData = stringData.replaceAll(`<ns${i}:label>`,`Label: `);
        stringData = stringData.replaceAll(`</ns${i}:label>`,``);
        stringData = stringData.replaceAll(`</ns${i}:addressbookList>`,``);
        stringData = stringData.replaceAll(`<ns${i}:defaultShipping>`,`Default Shipping: `);
        stringData = stringData.replaceAll(`</ns${i}:defaultShipping>`,``);
        stringData = stringData.replaceAll(`<platformMsgs:record xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com"`,``);
        stringData = stringData.replaceAll(`xsi:type="ns${i}:Customer`,`Type: Customer`);
        stringData = stringData.replaceAll(`<ns${i}:addressbookAddress/>`,``);
        stringData = stringData.replaceAll(`xmlns:ns${i}="urn:sales_2017_2.transactions.webservices.netsuite.com"`,``);
        stringData = stringData.replaceAll(`xsi:type="ns${i}:TransactionSearchAdvanced`,``);
        stringData = stringData.replaceAll(`xmlns:ns${i}="urn:sales_2017_2.transactions.webservices.netsuite.com`,``);
        stringData = stringData.replaceAll(`<ns${i}:columns`,``);
        stringData = stringData.replaceAll(`xsi:type="ns${i}:`,``);
        stringData = stringData.replaceAll(`<ns${i}:entity`,`Entity: `);
        stringData = stringData.replaceAll(`<ns${i}:tranDate`,`Transation Date: `);
        stringData = stringData.replaceAll(`</ns${i}:tranDate>`,``);
        stringData = stringData.replaceAll(`<ns${i}:tranId`,`Transaction Id:`);
        stringData = stringData.replaceAll(`</ns${i}:tranId>`,``);
        stringData = stringData.replaceAll(`<ns${i}:terms`,`Terms: `);
        stringData = stringData.replaceAll(`<ns${i}:currency`,`Currency: `);
        stringData = stringData.replaceAll(`<ns${i}:dueDate`,`Due Date: `);
        stringData = stringData.replaceAll(`</ns${i}:dueDate>`,``);
        stringData = stringData.replaceAll(`<ns${i}:otherRefNum`,`Other Reference Number: `);
        stringData = stringData.replaceAll(`</ns${i}:otherRefNum>`,``);
        stringData = stringData.replaceAll(`<ns${i}:memo`,`Memo: `);
        stringData = stringData.replaceAll(`</ns${i}:memo>`,``);
        stringData = stringData.replaceAll(`<ns${i}:exchangeRate`,`Exchange Rate: `);
        stringData = stringData.replaceAll(`</ns${i}:exchangeRate>`,``);
        stringData = stringData.replaceAll(`<ns${i}:billingAddress />`,`Billing Address: `);
        stringData = stringData.replaceAll(`<ns${i}:shippingAddress`,`Shipping Address: `);
        stringData = stringData.replaceAll(`</ns${i}:shippingAddress>`,``);
        stringData = stringData.replaceAll(`<ns${i}:itemList`,`Item List: `);
        stringData = stringData.replaceAll(`<ns${i}:item>`,`Item: `);
        stringData = stringData.replaceAll(`</ns${i}:item>`,``);
        stringData = stringData.replaceAll(`<ns${i}:item`,`Item: `)
        stringData = stringData.replaceAll(`<ns${i}:description>`,`Description: `);
        stringData = stringData.replaceAll(`</ns${i}:description>`,``);
        stringData = stringData.replaceAll(`<ns${i}:amount>`,`Amount: `);
        stringData = stringData.replaceAll(`</ns${i}:amount>`,``);
        stringData = stringData.replaceAll(`<ns${i}:quantity>`,`Quantity: `);
        stringData = stringData.replaceAll(`</ns${i}:quantity>`,``);
        stringData = stringData.replaceAll(`<ns${i}:customFieldList>`,`Custom Field List: `);
        stringData = stringData.replaceAll(`</ns${i}:customFieldList>`,``);
        stringData = stringData.replaceAll(`</ns${i}:itemList>`,``);
        stringData = stringData.replaceAll(`</ns${i}:billingAddress>`,``);
        stringData = stringData.replaceAll(`<ns${i}:billingAddress`,`Billing Address: `);
        stringData = stringData.replaceAll(`<ns${i}:parent xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com`,``);
        stringData = stringData.replaceAll(`xmlns:ns${i}="urn:relationships_2017_2.lists.webservices.netsuite.com"`,``);
        stringData = stringData.replaceAll(`<ns${i}:hostname`,``);
        stringData = stringData.replaceAll(`xmlns:ns${i}="`,``);
        stringData = stringData.replaceAll(`</ns${i}:hostname>`,``);
    }
    stringData = stringData.replaceAll(`</setupCustom:colStore>`,``);
    stringData = stringData.replaceAll(` >false `,`false`);
    stringData = stringData.replaceAll(`<platformCommon:comments>`,`Comments: `);
    stringData = stringData.replaceAll(`</platformCommon:comments>`,``);
    stringData = stringData.replaceAll(`>false</setupCustom:colStore>`,`false`);
    stringData = stringData.replaceAll(`>true</setupCustom:colStore>`,`true`);
    // clean up the rest of the document from XML 
    stringData = stringData.replaceAll(` >`,``);
    stringData = stringData.replaceAll(` /> `,` `);
    stringData = stringData.replaceAll(` </ `,``);
    stringData = stringData.replaceAll(`"/>`,``);
    stringData = stringData.replaceAll(` < `,``);
    stringData = stringData.replaceAll(` > `,``);
    // Finding the instances of records and total records and creating a new line for formatting
    let totalRecordsIndex = stringData.indexOf(`Total Records:`)
    let recordIndex = stringData.indexOf(` Record `)
    while(recordIndex>0){
        let insertIndex = recordIndex-1
        let line = "\n"
        stringData = stringData.slice(0,insertIndex)+line+line+stringData.slice(insertIndex,stringData.length)
        stringData[insertIndex]=`                                                                                                                                        `
        recordIndex = stringData.indexOf(` Record `,recordIndex+30)
    }
    while(totalRecordsIndex>0){
        let insertIndex = totalRecordsIndex-1
        let line = "\n"
        stringData = stringData.slice(0,insertIndex)+line+line+stringData.slice(insertIndex,stringData.length)
        stringData[insertIndex]=`                                                                                                                                        `
    totalRecordsIndex = stringData.indexOf(`Total Records:`,totalRecordsIndex+30)
    }
    // Creating a new file that is formatted
    // 
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }
      document.getElementById(`loading`).src = ``;
      // Start file download.
      download("ParsedNetSuiteLog.txt",stringData);
      
}   