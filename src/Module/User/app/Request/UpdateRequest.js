import yup from "yup";

class UserRequest {

	async updateUsername ( req, res, next ) {

		const headersValidator = yup.object().shape({
			session_id: yup.string().required()
		});

		const bodyValidator = yup.object().shape({
			username: yup.string().min(3).max(20).required(),
		});

		try {
			await headersValidator.validate(req.headers);
			await bodyValidator.validate(req.body);

		} catch (err) {
			return res.status(400).json({errors: err.errors});
		}

		await next();
	}
}

export default new UserRequest;