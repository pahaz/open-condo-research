// auto generated by kmigrator
// KMIGRATOR:0318_auto_20230919_0716:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMi41IG9uIDIwMjMtMDktMTkgMDc6MTYKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAzMTdfdXNlcnJpZ2h0c3NldF9jYW5tYW5hZ2V0aWNrZXRzX2FuZF9tb3JlJyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSdvcmdhbml6YXRpb25lbXBsb3llZXJvbGUnLAogICAgICAgICAgICBuYW1lPSdjYW5SZWFkQW5hbHl0aWNzJywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLkJvb2xlYW5GaWVsZChkZWZhdWx0PUZhbHNlKSwKICAgICAgICAgICAgcHJlc2VydmVfZGVmYXVsdD1GYWxzZSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWRkRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J29yZ2FuaXphdGlvbmVtcGxveWVlcm9sZWhpc3RvcnlyZWNvcmQnLAogICAgICAgICAgICBuYW1lPSdjYW5SZWFkQW5hbHl0aWNzJywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLkJvb2xlYW5GaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpLAogICAgICAgICksCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- [CUSTOM] Set Statement Timeout to some large amount - 25 min (25 * 60 => 1500 sec)
--
SET statement_timeout = '1500s';

--
-- Add field canReadAnalytics to organizationemployeerole
--
ALTER TABLE "OrganizationEmployeeRole" ADD COLUMN "canReadAnalytics" boolean DEFAULT false NOT NULL;
ALTER TABLE "OrganizationEmployeeRole" ALTER COLUMN "canReadAnalytics" DROP DEFAULT;
--
-- Add field canReadAnalytics to organizationemployeerolehistoryrecord
--
ALTER TABLE "OrganizationEmployeeRoleHistoryRecord" ADD COLUMN "canReadAnalytics" boolean NULL;

--
-- [CUSTOM] Set canReadAnalytics to true for existed administrators
--
UPDATE "OrganizationEmployeeRole"
SET "canReadAnalytics" = true
WHERE name = 'employee.role.Administrator.name';

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
-- Add field canReadAnalytics to organizationemployeerolehistoryrecord
--
ALTER TABLE "OrganizationEmployeeRoleHistoryRecord" DROP COLUMN "canReadAnalytics" CASCADE;
--
-- Add field canReadAnalytics to organizationemployeerole
--
ALTER TABLE "OrganizationEmployeeRole" DROP COLUMN "canReadAnalytics" CASCADE;
COMMIT;

    `)
}