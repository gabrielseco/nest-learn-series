import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './modules/app/app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, {
    	cors: true,
	});

	const options = new DocumentBuilder()
    .setTitle('Learn Series')
    .setDescription('My backend app for learn subtitles from series, films or books')
    .setVersion('1.0')
	.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/swagger', app, document);

	await app.listen(3000);
}
bootstrap();
