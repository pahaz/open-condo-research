// auto generated by kmigrator
// KMIGRATOR:0257_auto_20230412_1000:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDQuMSBvbiAyMDIzLTA0LTEyIDEwOjAwCgpmcm9tIGRqYW5nby5kYiBpbXBvcnQgbWlncmF0aW9ucwoKCmNsYXNzIE1pZ3JhdGlvbihtaWdyYXRpb25zLk1pZ3JhdGlvbik6CgogICAgZGVwZW5kZW5jaWVzID0gWwogICAgICAgICgnX2RqYW5nb19zY2hlbWEnLCAnMDI1Nl9yZW1vdmVfYmFua2FjY291bnRfcmVwb3J0dmlzaWJsZV9hbmRfbW9yZScpLAogICAgXQoKICAgIG9wZXJhdGlvbnMgPSBbCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
        BEGIN;
            --
            -- [CUSTOM] Set Statement Timeout to some large amount - 25 min (25 * 60 => 1500 sec)
            --
            SET statement_timeout = '1500s';  
            UPDATE "OrganizationEmployeeRole"
            SET "canManageBankAccountReports" = true, 
                "canManageBankTransactions" = true, 
                "canManageBankContractorAccounts" = true,
                "canManageBankIntegrationOrganizationContexts" = true,
                "canManageBankIntegrationAccountContexts" = true,
                "canManageBankAccounts" = true
            WHERE "name" = 'employee.role.Administrator.name';
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
        COMMIT;
    `)
}