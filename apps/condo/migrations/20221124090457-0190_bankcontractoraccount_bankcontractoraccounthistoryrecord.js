// auto generated by kmigrator
// KMIGRATOR:0190_bankcontractoraccount_bankcontractoraccounthistoryrecord:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMi45IG9uIDIwMjItMTEtMjQgMDY6MDQKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKaW1wb3J0IGRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24KCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAxODlfYmFua2Nvc3RpdGVtX2Jhbmtjb3N0aXRlbWhpc3RvcnlyZWNvcmQnKSwKICAgIF0KCiAgICBvcGVyYXRpb25zID0gWwogICAgICAgIG1pZ3JhdGlvbnMuQ3JlYXRlTW9kZWwoCiAgICAgICAgICAgIG5hbWU9J2Jhbmtjb250cmFjdG9yYWNjb3VudGhpc3RvcnlyZWNvcmQnLAogICAgICAgICAgICBmaWVsZHM9WwogICAgICAgICAgICAgICAgKCduYW1lJywgbW9kZWxzLlRleHRGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnb3JnYW5pemF0aW9uJywgbW9kZWxzLlVVSURGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnY29zdEl0ZW0nLCBtb2RlbHMuVVVJREZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCd0aW4nLCBtb2RlbHMuVGV4dEZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdjb3VudHJ5JywgbW9kZWxzLlRleHRGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgncm91dGluZ051bWJlcicsIG1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ251bWJlcicsIG1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2N1cnJlbmN5Q29kZScsIG1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2ltcG9ydElkJywgbW9kZWxzLlRleHRGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgndGVycml0b3J5Q29kZScsIG1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2JhbmtOYW1lJywgbW9kZWxzLlRleHRGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnbWV0YScsIG1vZGVscy5KU09ORmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2lkJywgbW9kZWxzLlVVSURGaWVsZChwcmltYXJ5X2tleT1UcnVlLCBzZXJpYWxpemU9RmFsc2UpKSwKICAgICAgICAgICAgICAgICgndicsIG1vZGVscy5JbnRlZ2VyRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2NyZWF0ZWRBdCcsIG1vZGVscy5EYXRlVGltZUZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCd1cGRhdGVkQXQnLCBtb2RlbHMuRGF0ZVRpbWVGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnY3JlYXRlZEJ5JywgbW9kZWxzLlVVSURGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgndXBkYXRlZEJ5JywgbW9kZWxzLlVVSURGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnZGVsZXRlZEF0JywgbW9kZWxzLkRhdGVUaW1lRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ25ld0lkJywgbW9kZWxzLkpTT05GaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnZHYnLCBtb2RlbHMuSW50ZWdlckZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdzZW5kZXInLCBtb2RlbHMuSlNPTkZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdoaXN0b3J5X2RhdGUnLCBtb2RlbHMuRGF0ZVRpbWVGaWVsZCgpKSwKICAgICAgICAgICAgICAgICgnaGlzdG9yeV9hY3Rpb24nLCBtb2RlbHMuQ2hhckZpZWxkKGNob2ljZXM9WygnYycsICdjJyksICgndScsICd1JyksICgnZCcsICdkJyldLCBtYXhfbGVuZ3RoPTUwKSksCiAgICAgICAgICAgICAgICAoJ2hpc3RvcnlfaWQnLCBtb2RlbHMuVVVJREZpZWxkKGRiX2luZGV4PVRydWUpKSwKICAgICAgICAgICAgXSwKICAgICAgICAgICAgb3B0aW9ucz17CiAgICAgICAgICAgICAgICAnZGJfdGFibGUnOiAnQmFua0NvbnRyYWN0b3JBY2NvdW50SGlzdG9yeVJlY29yZCcsCiAgICAgICAgICAgIH0sCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkNyZWF0ZU1vZGVsKAogICAgICAgICAgICBuYW1lPSdiYW5rY29udHJhY3RvcmFjY291bnQnLAogICAgICAgICAgICBmaWVsZHM9WwogICAgICAgICAgICAgICAgKCduYW1lJywgbW9kZWxzLlRleHRGaWVsZCgpKSwKICAgICAgICAgICAgICAgICgndGluJywgbW9kZWxzLlRleHRGaWVsZCgpKSwKICAgICAgICAgICAgICAgICgnY291bnRyeScsIG1vZGVscy5UZXh0RmllbGQoKSksCiAgICAgICAgICAgICAgICAoJ3JvdXRpbmdOdW1iZXInLCBtb2RlbHMuVGV4dEZpZWxkKCkpLAogICAgICAgICAgICAgICAgKCdudW1iZXInLCBtb2RlbHMuVGV4dEZpZWxkKCkpLAogICAgICAgICAgICAgICAgKCdjdXJyZW5jeUNvZGUnLCBtb2RlbHMuVGV4dEZpZWxkKCkpLAogICAgICAgICAgICAgICAgKCdpbXBvcnRJZCcsIG1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ3RlcnJpdG9yeUNvZGUnLCBtb2RlbHMuVGV4dEZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdiYW5rTmFtZScsIG1vZGVscy5UZXh0RmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ21ldGEnLCBtb2RlbHMuSlNPTkZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdpZCcsIG1vZGVscy5VVUlERmllbGQocHJpbWFyeV9rZXk9VHJ1ZSwgc2VyaWFsaXplPUZhbHNlKSksCiAgICAgICAgICAgICAgICAoJ3YnLCBtb2RlbHMuSW50ZWdlckZpZWxkKGRlZmF1bHQ9MSkpLAogICAgICAgICAgICAgICAgKCdjcmVhdGVkQXQnLCBtb2RlbHMuRGF0ZVRpbWVGaWVsZChibGFuaz1UcnVlLCBkYl9pbmRleD1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgndXBkYXRlZEF0JywgbW9kZWxzLkRhdGVUaW1lRmllbGQoYmxhbms9VHJ1ZSwgZGJfaW5kZXg9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2RlbGV0ZWRBdCcsIG1vZGVscy5EYXRlVGltZUZpZWxkKGJsYW5rPVRydWUsIGRiX2luZGV4PVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCduZXdJZCcsIG1vZGVscy5VVUlERmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2R2JywgbW9kZWxzLkludGVnZXJGaWVsZCgpKSwKICAgICAgICAgICAgICAgICgnc2VuZGVyJywgbW9kZWxzLkpTT05GaWVsZCgpKSwKICAgICAgICAgICAgICAgICgnY29zdEl0ZW0nLCBtb2RlbHMuRm9yZWlnbktleShibGFuaz1UcnVlLCBkYl9jb2x1bW49J2Nvc3RJdGVtJywgbnVsbD1UcnVlLCBvbl9kZWxldGU9ZGphbmdvLmRiLm1vZGVscy5kZWxldGlvbi5TRVRfTlVMTCwgcmVsYXRlZF9uYW1lPScrJywgdG89J19kamFuZ29fc2NoZW1hLmJhbmtjb3N0aXRlbScpKSwKICAgICAgICAgICAgICAgICgnY3JlYXRlZEJ5JywgbW9kZWxzLkZvcmVpZ25LZXkoYmxhbms9VHJ1ZSwgZGJfY29sdW1uPSdjcmVhdGVkQnknLCBudWxsPVRydWUsIG9uX2RlbGV0ZT1kamFuZ28uZGIubW9kZWxzLmRlbGV0aW9uLlNFVF9OVUxMLCByZWxhdGVkX25hbWU9JysnLCB0bz0nX2RqYW5nb19zY2hlbWEudXNlcicpKSwKICAgICAgICAgICAgICAgICgnb3JnYW5pemF0aW9uJywgbW9kZWxzLkZvcmVpZ25LZXkoZGJfY29sdW1uPSdvcmdhbml6YXRpb24nLCBvbl9kZWxldGU9ZGphbmdvLmRiLm1vZGVscy5kZWxldGlvbi5DQVNDQURFLCByZWxhdGVkX25hbWU9JysnLCB0bz0nX2RqYW5nb19zY2hlbWEub3JnYW5pemF0aW9uJykpLAogICAgICAgICAgICAgICAgKCd1cGRhdGVkQnknLCBtb2RlbHMuRm9yZWlnbktleShibGFuaz1UcnVlLCBkYl9jb2x1bW49J3VwZGF0ZWRCeScsIG51bGw9VHJ1ZSwgb25fZGVsZXRlPWRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24uU0VUX05VTEwsIHJlbGF0ZWRfbmFtZT0nKycsIHRvPSdfZGphbmdvX3NjaGVtYS51c2VyJykpLAogICAgICAgICAgICBdLAogICAgICAgICAgICBvcHRpb25zPXsKICAgICAgICAgICAgICAgICdkYl90YWJsZSc6ICdCYW5rQ29udHJhY3RvckFjY291bnQnLAogICAgICAgICAgICB9LAogICAgICAgICksCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Create model bankcontractoraccounthistoryrecord
--
CREATE TABLE "BankContractorAccountHistoryRecord" ("name" text NULL, "organization" uuid NULL, "costItem" uuid NULL, "tin" text NULL, "country" text NULL, "routingNumber" text NULL, "number" text NULL, "currencyCode" text NULL, "importId" text NULL, "territoryCode" text NULL, "bankName" text NULL, "meta" jsonb NULL, "id" uuid NOT NULL PRIMARY KEY, "v" integer NULL, "createdAt" timestamp with time zone NULL, "updatedAt" timestamp with time zone NULL, "createdBy" uuid NULL, "updatedBy" uuid NULL, "deletedAt" timestamp with time zone NULL, "newId" jsonb NULL, "dv" integer NULL, "sender" jsonb NULL, "history_date" timestamp with time zone NOT NULL, "history_action" varchar(50) NOT NULL, "history_id" uuid NOT NULL);
--
-- Create model bankcontractoraccount
--
CREATE TABLE "BankContractorAccount" ("name" text NOT NULL, "tin" text NOT NULL, "country" text NOT NULL, "routingNumber" text NOT NULL, "number" text NOT NULL, "currencyCode" text NOT NULL, "importId" text NULL, "territoryCode" text NULL, "bankName" text NULL, "meta" jsonb NULL, "id" uuid NOT NULL PRIMARY KEY, "v" integer NOT NULL, "createdAt" timestamp with time zone NULL, "updatedAt" timestamp with time zone NULL, "deletedAt" timestamp with time zone NULL, "newId" uuid NULL, "dv" integer NOT NULL, "sender" jsonb NOT NULL, "costItem" uuid NULL, "createdBy" uuid NULL, "organization" uuid NOT NULL, "updatedBy" uuid NULL);
CREATE INDEX "BankContractorAccountHistoryRecord_history_id_31f2ad89" ON "BankContractorAccountHistoryRecord" ("history_id");
ALTER TABLE "BankContractorAccount" ADD CONSTRAINT "BankContractorAccount_costItem_332254fa_fk_BankCostItem_id" FOREIGN KEY ("costItem") REFERENCES "BankCostItem" ("id") DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "BankContractorAccount" ADD CONSTRAINT "BankContractorAccount_createdBy_7c81645e_fk_User_id" FOREIGN KEY ("createdBy") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "BankContractorAccount" ADD CONSTRAINT "BankContractorAccount_organization_ac59ad48_fk_Organization_id" FOREIGN KEY ("organization") REFERENCES "Organization" ("id") DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "BankContractorAccount" ADD CONSTRAINT "BankContractorAccount_updatedBy_ce3250fa_fk_User_id" FOREIGN KEY ("updatedBy") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
CREATE INDEX "BankContractorAccount_createdAt_36d72560" ON "BankContractorAccount" ("createdAt");
CREATE INDEX "BankContractorAccount_updatedAt_fc3fbd4f" ON "BankContractorAccount" ("updatedAt");
CREATE INDEX "BankContractorAccount_deletedAt_36bc8c81" ON "BankContractorAccount" ("deletedAt");
CREATE INDEX "BankContractorAccount_costItem_332254fa" ON "BankContractorAccount" ("costItem");
CREATE INDEX "BankContractorAccount_createdBy_7c81645e" ON "BankContractorAccount" ("createdBy");
CREATE INDEX "BankContractorAccount_organization_ac59ad48" ON "BankContractorAccount" ("organization");
CREATE INDEX "BankContractorAccount_updatedBy_ce3250fa" ON "BankContractorAccount" ("updatedBy");
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Create model bankcontractoraccount
--
DROP TABLE "BankContractorAccount" CASCADE;
--
-- Create model bankcontractoraccounthistoryrecord
--
DROP TABLE "BankContractorAccountHistoryRecord" CASCADE;
COMMIT;

    `)
}