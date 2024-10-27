import { json } from '@sveltejs/kit';

import fs from 'fs';
import path from 'path';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const formData = await request.formData();
  const file = formData.get('file');
  if (file) {
		// 保存するパスの作成（例えばstaticディレクトリ外に保存）
		const uploadDir = path.join('static', 'uploads');
		const filePath = path.join(uploadDir, file.name);

		// ディレクトリが存在しない場合は作成
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir, { recursive: true });
		}

		// ファイルのデータを読み取り、保存する
		const fileData = Buffer.from(await file.arrayBuffer());
		fs.writeFileSync(filePath, fileData);

		return json({ status: 'success', filePath });
	}
	return json(file);
}