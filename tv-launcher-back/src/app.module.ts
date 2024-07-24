import { Module } from '@nestjs/common';
import {LienModule} from "./liens.module";

@Module({
  imports: [LienModule],
})
export class AppModule {}