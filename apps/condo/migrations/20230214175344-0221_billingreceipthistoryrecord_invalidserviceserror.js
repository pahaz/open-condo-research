// auto generated by kmigrator
// KMIGRATOR:0221_billingreceipthistoryrecord_invalidserviceserror:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDQuMS4zIG9uIDIwMjMtMDItMTQgMTI6NTMKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAyMjBfYXV0b18yMDIzMDIxM18xMDU1JyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSdiaWxsaW5ncmVjZWlwdGhpc3RvcnlyZWNvcmQnLAogICAgICAgICAgICBuYW1lPSdpbnZhbGlkU2VydmljZXNFcnJvcicsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5KU09ORmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgXQo=

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;

--
-- [CUSTOM] Set Statement Timeout to some large amount - 25 min (25 * 60 => 1500 sec)
--
SET statement_timeout = '1500s'; 

--
-- Add field invalidServicesError to billingreceipthistoryrecord
--
ALTER TABLE "BillingReceiptHistoryRecord" ADD COLUMN "invalidServicesError" jsonb NULL;

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
-- Add field invalidServicesError to billingreceipthistoryrecord
--
ALTER TABLE "BillingReceiptHistoryRecord" DROP COLUMN "invalidServicesError" CASCADE;

--
-- [CUSTOM] Revert Statement Timeout to default amount - 10 secs
--
SET statement_timeout = '10s';

COMMIT;

    `)
}