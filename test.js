var names = ['abp-news','accenture','adidas','airtel','ashok-leyland','bandhan-bank','better-option-propmart',
			'bharat-star-services-pvt-ltd','bhilwara-infotechnology-ltd','birla-sun-life','byju\'scom',
			'cognizant','cox-kings','da-milano','darwin-labs','getit','goo2o-technology','google-india',
			'hdb-financial-services-ltd','hdfc-bank','icici-prudential-life-insurance','icici-securities','indiabulls','infoedge-pvt-ltd','infosys','itc-group','karvy-data-management-services-','I-t-infotech',
			'mantra-919','microsoft','mphasis','mrf-tyres','nokia-seimens-network','optimus-information-india-pvt-ltd',
			'oracle','policy-bazaar','posterity-consulting-(p)-ltd','qss-technosoft','rane-madras','sapient-corporation',
			'smc','tally','tata-consultancy-services','tci','videocon','vodafone','wipro','yes-bank'];

var members = [{img:'seemacrc',name:'Seema Barthwal',designation:'CRC Director',email:'seema.b@invertis.org',phone:'9634353882'},
			   {img:'varuncrc',name:'Varun Sharma',designation:'Senior Executive',email:'varun.s@invertis.org',phone:'96900213216'},
			   {img:'nupurcrc',name:'Nupur Verma',designation:'CRC Executive',email:'nupur.v@invertis.org',phone:'9634353882'}
			   ];

const fs = require('fs');

fs.writeFileSync('team-members.json',JSON.stringify(members));




