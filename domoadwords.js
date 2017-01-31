// Domo Keywords Performance Report Script
// Single AdWords Account

	Logger.log("Initiating remote script");

var REPORT_TYPE = 'KEYWORDS_PERFORMANCE_REPORT';
	Logger.log("Report type set");

var FILTER = 'Impressions > 0';

var DATE_RANGE = 'THIS_MONTH';
	Logger.log("Report date set");

var COLUMN_NAMES = [
	'Date',
	'Criteria',
	'Status',
	'CampaignName',
	'EffectiveFinalUrl',
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
