// Domo Keywords Performance Report Script
// Single AdWords Account

	Logger.log("Initiating remote script");

var REPORT_TYPE = 'KEYWORDS_PERFORMANCE_REPORT';
	Logger.log("Report type set");

var FILTER = 'Impressions > 0';

var currentDate = new Date();
var DATE_RANGE = "20170101, " + currentDate.getFullYear() + (((currentDate.getMonth() + 1).toString().length < 2) ? ("0" + (currentDate.getMonth() + 1)) : currentDate.getMonth() + 1) + (((currentDate.getDate()).toString().length < 2) ? ("0" + currentDate.getDate()) : currentDate.getDate());
	Logger.log("Report date set");

var COLUMN_NAMES = [
	'Date',
	'Criteria',
	'Status',
	'CampaignName',
	'AdGroupName',
	'Clicks',
	'Impressions',
	'Ctr',
	'AverageCpc',
	'AverageCpm',
  'CpcBid',
	'Cost',
	'AveragePosition',
	'CostPerConversion',
	'ConversionRate',
	'Conversions',
	'ViewThroughConversions',
	'QualityScore',
	'BounceRate',
	'CpcBid',
	'AveragePageviews',
	'AverageTimeOnSite'
];

var COLUMNS = COLUMN_NAMES.join(',');
	Logger.log("Columns set");

var REPORT = AdWordsApp.report(
	'SELECT ' +
	COLUMNS +
	' FROM ' +
	REPORT_TYPE +
	' WHERE Status IN [REMOVED, ENABLED, PAUSED]' +
	' AND ' +
	FILTER +
	' DURING ' +
	DATE_RANGE
);
	Logger.log("Report built");

REPORT.exportToSheet(adwordsSheet);
	Logger.log((adwordsSheet.getLastRow() - 1) + " rows added to sheet");
