// auto generated by kmigrator
// KMIGRATOR:0436_meterreading_accountnumber_and_more:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDQuMi4xMyBvbiAyMDI0LTExLTA3IDE5OjU4Cgpmcm9tIGRqYW5nby5kYiBpbXBvcnQgbWlncmF0aW9ucywgbW9kZWxzCgoKY2xhc3MgTWlncmF0aW9uKG1pZ3JhdGlvbnMuTWlncmF0aW9uKToKCiAgICBkZXBlbmRlbmNpZXMgPSBbCiAgICAgICAgKCdfZGphbmdvX3NjaGVtYScsICcwNDM1X2FsdGVyX21ldGVycmVhZGluZ3NvdXJjZV90eXBlJyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSdtZXRlcnJlYWRpbmcnLAogICAgICAgICAgICBuYW1lPSdhY2NvdW50TnVtYmVyJywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLlRleHRGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpLAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5BZGRGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0nbWV0ZXJyZWFkaW5naGlzdG9yeXJlY29yZCcsCiAgICAgICAgICAgIG5hbWU9J2FjY291bnROdW1iZXInLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuVGV4dEZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSksCiAgICAgICAgKSwKICAgIF0K

exports.up = async (knex) => {
    await knex.raw(`
BEGIN;
--
-- [CUSTOM] Set Statement Timeout to some large amount - 25 min (25 * 60 => 1500 sec)
--
SET statement_timeout = '1500s';
--
-- Add field accountNumber to meterreading
--
ALTER TABLE "MeterReading" ADD COLUMN "accountNumber" text NULL;
--
-- Add field accountNumber to meterreadinghistoryrecord
--
ALTER TABLE "MeterReadingHistoryRecord" ADD COLUMN "accountNumber" text NULL;
--
-- [CUSTOM] Revert Statement Timeout to default amount - 10 secs
--
SET statement_timeout = '10s';
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
BEGIN;
--
-- [CUSTOM] Set Statement Timeout to some large amount - 25 min (25 * 60 => 1500 sec)
--
SET statement_timeout = '1500s';
--
-- Add field accountNumber to meterreadinghistoryrecord
--
ALTER TABLE "MeterReadingHistoryRecord" DROP COLUMN "accountNumber" CASCADE;
--
-- Add field accountNumber to meterreading
--
ALTER TABLE "MeterReading" DROP COLUMN "accountNumber" CASCADE;
--
-- [CUSTOM] Revert Statement Timeout to default amount - 10 secs
--
SET statement_timeout = '10s';
COMMIT;

    `)
}