import { NextRequest, NextResponse } from 'next/server';

import { STUDIO_PAGE } from '@/config/studio-page.config';

import { getTokensFromRequest } from './utils/get-token-from-request';
import { jwtVerifyServer } from './utils/jwt-verify';
import { nextRedirect } from './utils/next-redirect';

export async function protectLoginPages(request: NextRequest) {
	const tokens = await getTokensFromRequest(request);
	if (!tokens) return NextResponse.next();
	
	// checking token = string type
	if (!tokens.accessToken || typeof tokens.accessToken !== 'string') return NextResponse.next();

	const verifiedData = await jwtVerifyServer(tokens.accessToken);
	if (!verifiedData) return NextResponse.next();
	console.log('req.url protectAuth:', request.url)
	return nextRedirect(STUDIO_PAGE.HOME, request.url);
}
