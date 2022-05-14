import { CacheInterceptor, CacheModule as NestCache, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { RedisClientOptions } from "redis";
import * as redisStore from "cache-manager-redis-store";


// /**
//  * 缓存数据到内存
//  */
// @Module({
//   imports: [NestCache.register({ isGlobal: true })],
//   providers: [
//     {
//       provide: APP_INTERCEPTOR,
//       useClass: CacheInterceptor
//     }
//   ]
// })
// export class CacheModule {
// }

@Module({
  imports: [
    NestCache.register<RedisClientOptions>({
      store: redisStore,
      socket: {
        host: "localhost",
        port: 6379
      }
    })
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class CacheModule {
}