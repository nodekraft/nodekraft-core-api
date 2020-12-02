BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "DevelopmentResources" (
	"Origin"	TEXT,
	"Title"	TEXT,
	"LanguageName"	TEXT,
	"LanguageType"	TEXT,
	"Body"	TEXT,
	"Tags"	TEXT,
	"CreatedBy"	TEXT,
	"UpdatedBy"	TEXT,
	"Id"	INTEGER
);
COMMIT;
