import { NextRequest, NextResponse } from 'next/server';

import { getTokensFromRequest } from './utils/get-token-from-request';
import { jwtVerifyServer } from './utils/jwt-verify';
import { redirectToLogin } from './utils/redirect-to-login';

export async function protectStudio(request: NextRequest) {
	const tokens = await getTokensFromRequest(request);
	if (!tokens) return redirectToLogin(request);

	if (!tokens.accessToken || typeof tokens.accessToken !== 'string') return NextResponse.next();

	try {
		const verifiedData = await jwtVerifyServer(tokens.accessToken);
		if (!verifiedData) return redirectToLogin(request);
	} catch (error) {
		console.error('JWT error', error);
		return redirectToLogin(request);
	}
	return NextResponse.next();
}
