from rest_framework.views import APIView
from rest_framework import status
from rest_framework import status, response
from rest_framework.decorators import api_view


class MicrosoftAuth(APIView):
    @api_view(['POST'])
    def validate_microsoft_token(request):
        import requests
        graph_api_endpoint = 'https://graph.microsoft.com/v1.0/me'
        access_token = request.data['access_token']
        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }

        req_response = requests.get(graph_api_endpoint, headers=headers)
        req_response.raise_for_status()
        user_data = req_response.json()
        return response.Response(data=user_data, status=status.HTTP_200_OK)