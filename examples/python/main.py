#!/usr/bin/env python
import os

from cdktf import App, TerraformStack
from cdktf_snowflake import SnowflakeProvider, User
from constructs import Construct
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

class SnowflakeStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        config = SnowflakeProvider(
            self,
            id="provider",
            account=os.environ.get("SNOWFLAKE_ACCOUNT"),
            password=os.environ.get("SNOWFLAKE_PASSWORD"),
            username=os.environ.get("SNOWFLAKE_USERNAME"),
            role=os.environ.get("SNOWFLAKE_ROLE"),
        )
        test_user = User(self, "test-user", name="test", provider=config)


app = App()
SnowflakeStack(app, "py-cdktf-snowflake")

app.synth()
