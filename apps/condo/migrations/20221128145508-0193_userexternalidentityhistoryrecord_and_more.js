// auto generated by kmigrator
// KMIGRATOR:0193_userexternalidentityhistoryrecord_and_more:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDQuMC40IG9uIDIwMjItMTEtMjggMDk6NTUKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKaW1wb3J0IGRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24KCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAxOTJfcHJvcGVydHlfYWRkcmVzc2tleV9wcm9wZXJ0eV9hZGRyZXNzc291cmNlc19hbmRfbW9yZScpLAogICAgXQoKICAgIG9wZXJhdGlvbnMgPSBbCiAgICAgICAgbWlncmF0aW9ucy5DcmVhdGVNb2RlbCgKICAgICAgICAgICAgbmFtZT0ndXNlcmV4dGVybmFsaWRlbnRpdHloaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgZmllbGRzPVsKICAgICAgICAgICAgICAgICgndXNlcicsIG1vZGVscy5VVUlERmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2lkZW50aXR5SWQnLCBtb2RlbHMuVGV4dEZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdpZGVudGl0eVR5cGUnLCBtb2RlbHMuVGV4dEZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdtZXRhJywgbW9kZWxzLkpTT05GaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnaWQnLCBtb2RlbHMuVVVJREZpZWxkKHByaW1hcnlfa2V5PVRydWUsIHNlcmlhbGl6ZT1GYWxzZSkpLAogICAgICAgICAgICAgICAgKCd2JywgbW9kZWxzLkludGVnZXJGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnY3JlYXRlZEF0JywgbW9kZWxzLkRhdGVUaW1lRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ3VwZGF0ZWRBdCcsIG1vZGVscy5EYXRlVGltZUZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdjcmVhdGVkQnknLCBtb2RlbHMuVVVJREZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCd1cGRhdGVkQnknLCBtb2RlbHMuVVVJREZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdkZWxldGVkQXQnLCBtb2RlbHMuRGF0ZVRpbWVGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnbmV3SWQnLCBtb2RlbHMuSlNPTkZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdkdicsIG1vZGVscy5JbnRlZ2VyRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ3NlbmRlcicsIG1vZGVscy5KU09ORmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ2hpc3RvcnlfZGF0ZScsIG1vZGVscy5EYXRlVGltZUZpZWxkKCkpLAogICAgICAgICAgICAgICAgKCdoaXN0b3J5X2FjdGlvbicsIG1vZGVscy5DaGFyRmllbGQoY2hvaWNlcz1bKCdjJywgJ2MnKSwgKCd1JywgJ3UnKSwgKCdkJywgJ2QnKV0sIG1heF9sZW5ndGg9NTApKSwKICAgICAgICAgICAgICAgICgnaGlzdG9yeV9pZCcsIG1vZGVscy5VVUlERmllbGQoZGJfaW5kZXg9VHJ1ZSkpLAogICAgICAgICAgICBdLAogICAgICAgICAgICBvcHRpb25zPXsKICAgICAgICAgICAgICAgICdkYl90YWJsZSc6ICdVc2VyRXh0ZXJuYWxJZGVudGl0eUhpc3RvcnlSZWNvcmQnLAogICAgICAgICAgICB9LAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5DcmVhdGVNb2RlbCgKICAgICAgICAgICAgbmFtZT0ndXNlcmV4dGVybmFsaWRlbnRpdHknLAogICAgICAgICAgICBmaWVsZHM9WwogICAgICAgICAgICAgICAgKCdpZGVudGl0eUlkJywgbW9kZWxzLlRleHRGaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnaWRlbnRpdHlUeXBlJywgbW9kZWxzLkNoYXJGaWVsZChjaG9pY2VzPVsoJ3NiZXJfaWQnLCAnc2Jlcl9pZCcpXSwgbWF4X2xlbmd0aD01MCkpLAogICAgICAgICAgICAgICAgKCdtZXRhJywgbW9kZWxzLkpTT05GaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnaWQnLCBtb2RlbHMuVVVJREZpZWxkKHByaW1hcnlfa2V5PVRydWUsIHNlcmlhbGl6ZT1GYWxzZSkpLAogICAgICAgICAgICAgICAgKCd2JywgbW9kZWxzLkludGVnZXJGaWVsZChkZWZhdWx0PTEpKSwKICAgICAgICAgICAgICAgICgnY3JlYXRlZEF0JywgbW9kZWxzLkRhdGVUaW1lRmllbGQoYmxhbms9VHJ1ZSwgZGJfaW5kZXg9VHJ1ZSwgbnVsbD1UcnVlKSksCiAgICAgICAgICAgICAgICAoJ3VwZGF0ZWRBdCcsIG1vZGVscy5EYXRlVGltZUZpZWxkKGJsYW5rPVRydWUsIGRiX2luZGV4PVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdkZWxldGVkQXQnLCBtb2RlbHMuRGF0ZVRpbWVGaWVsZChibGFuaz1UcnVlLCBkYl9pbmRleD1UcnVlLCBudWxsPVRydWUpKSwKICAgICAgICAgICAgICAgICgnbmV3SWQnLCBtb2RlbHMuVVVJREZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSkpLAogICAgICAgICAgICAgICAgKCdkdicsIG1vZGVscy5JbnRlZ2VyRmllbGQoKSksCiAgICAgICAgICAgICAgICAoJ3NlbmRlcicsIG1vZGVscy5KU09ORmllbGQoKSksCiAgICAgICAgICAgICAgICAoJ2NyZWF0ZWRCeScsIG1vZGVscy5Gb3JlaWduS2V5KGJsYW5rPVRydWUsIGRiX2NvbHVtbj0nY3JlYXRlZEJ5JywgbnVsbD1UcnVlLCBvbl9kZWxldGU9ZGphbmdvLmRiLm1vZGVscy5kZWxldGlvbi5TRVRfTlVMTCwgcmVsYXRlZF9uYW1lPScrJywgdG89J19kamFuZ29fc2NoZW1hLnVzZXInKSksCiAgICAgICAgICAgICAgICAoJ3VwZGF0ZWRCeScsIG1vZGVscy5Gb3JlaWduS2V5KGJsYW5rPVRydWUsIGRiX2NvbHVtbj0ndXBkYXRlZEJ5JywgbnVsbD1UcnVlLCBvbl9kZWxldGU9ZGphbmdvLmRiLm1vZGVscy5kZWxldGlvbi5TRVRfTlVMTCwgcmVsYXRlZF9uYW1lPScrJywgdG89J19kamFuZ29fc2NoZW1hLnVzZXInKSksCiAgICAgICAgICAgICAgICAoJ3VzZXInLCBtb2RlbHMuRm9yZWlnbktleShkYl9jb2x1bW49J3VzZXInLCBvbl9kZWxldGU9ZGphbmdvLmRiLm1vZGVscy5kZWxldGlvbi5QUk9URUNULCByZWxhdGVkX25hbWU9JysnLCB0bz0nX2RqYW5nb19zY2hlbWEudXNlcicpKSwKICAgICAgICAgICAgXSwKICAgICAgICAgICAgb3B0aW9ucz17CiAgICAgICAgICAgICAgICAnZGJfdGFibGUnOiAnVXNlckV4dGVybmFsSWRlbnRpdHknLAogICAgICAgICAgICB9LAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5BZGRDb25zdHJhaW50KAogICAgICAgICAgICBtb2RlbF9uYW1lPSd1c2VyZXh0ZXJuYWxpZGVudGl0eScsCiAgICAgICAgICAgIGNvbnN0cmFpbnQ9bW9kZWxzLlVuaXF1ZUNvbnN0cmFpbnQoZmllbGRzPSgnaWRlbnRpdHlJZCcsICdpZGVudGl0eVR5cGUnKSwgbmFtZT0ndW5pcXVlX2lkZW50aXR5aWRfYW5kX2lkZW50aXR5dHlwZScpLAogICAgICAgICksCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Create model userexternalidentityhistoryrecord
--
CREATE TABLE "UserExternalIdentityHistoryRecord" ("user" uuid NULL, "identityId" text NULL, "identityType" text NULL, "meta" jsonb NULL, "id" uuid NOT NULL PRIMARY KEY, "v" integer NULL, "createdAt" timestamp with time zone NULL, "updatedAt" timestamp with time zone NULL, "createdBy" uuid NULL, "updatedBy" uuid NULL, "deletedAt" timestamp with time zone NULL, "newId" jsonb NULL, "dv" integer NULL, "sender" jsonb NULL, "history_date" timestamp with time zone NOT NULL, "history_action" varchar(50) NOT NULL, "history_id" uuid NOT NULL);
--
-- Create model userexternalidentity
--
CREATE TABLE "UserExternalIdentity" ("identityId" text NULL, "identityType" varchar(50) NOT NULL, "meta" jsonb NULL, "id" uuid NOT NULL PRIMARY KEY, "v" integer NOT NULL, "createdAt" timestamp with time zone NULL, "updatedAt" timestamp with time zone NULL, "deletedAt" timestamp with time zone NULL, "newId" uuid NULL, "dv" integer NOT NULL, "sender" jsonb NOT NULL, "createdBy" uuid NULL, "updatedBy" uuid NULL, "user" uuid NOT NULL);
--
-- Create constraint unique_identityid_and_identitytype on model userexternalidentity
--
ALTER TABLE "UserExternalIdentity" ADD CONSTRAINT "unique_identityid_and_identitytype" UNIQUE ("identityId", "identityType");
CREATE INDEX "UserExternalIdentityHistoryRecord_history_id_14314314" ON "UserExternalIdentityHistoryRecord" ("history_id");
ALTER TABLE "UserExternalIdentity" ADD CONSTRAINT "UserExternalIdentity_createdBy_78b7717a_fk_User_id" FOREIGN KEY ("createdBy") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "UserExternalIdentity" ADD CONSTRAINT "UserExternalIdentity_updatedBy_a153b33f_fk_User_id" FOREIGN KEY ("updatedBy") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
ALTER TABLE "UserExternalIdentity" ADD CONSTRAINT "UserExternalIdentity_user_2c4cb201_fk_User_id" FOREIGN KEY ("user") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
CREATE INDEX "UserExternalIdentity_createdAt_d11a5180" ON "UserExternalIdentity" ("createdAt");
CREATE INDEX "UserExternalIdentity_updatedAt_d9ec55ad" ON "UserExternalIdentity" ("updatedAt");
CREATE INDEX "UserExternalIdentity_deletedAt_47047f30" ON "UserExternalIdentity" ("deletedAt");
CREATE INDEX "UserExternalIdentity_createdBy_78b7717a" ON "UserExternalIdentity" ("createdBy");
CREATE INDEX "UserExternalIdentity_updatedBy_a153b33f" ON "UserExternalIdentity" ("updatedBy");
CREATE INDEX "UserExternalIdentity_user_2c4cb201" ON "UserExternalIdentity" ("user");
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Create constraint unique_identityid_and_identitytype on model userexternalidentity
--
ALTER TABLE "UserExternalIdentity" DROP CONSTRAINT "unique_identityid_and_identitytype";
--
-- Create model userexternalidentity
--
DROP TABLE "UserExternalIdentity" CASCADE;
--
-- Create model userexternalidentityhistoryrecord
--
DROP TABLE "UserExternalIdentityHistoryRecord" CASCADE;
COMMIT;

    `)
}