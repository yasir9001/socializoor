from rest_framework import serializers
from userauth.models import User, UserProfile

class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ('title', 'dob', 'address', 'country', 'city', '_zip', 'photo')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = UserProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('url', 'email', 'first_name', 'last_name', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}


    def create(self, validate_data):
        print('===================sdssdsds=================', validate_data )
        profile_data = validate_data.pop('profile')
        password = validate_data.pop('password')
        user = User(**validate_data)
        user.set_password(password)
        user.save()
        UserProfile.objects.create(user=user, **profile_data)
        return user

    # def update(self, instance, validate_data):
    #     profile_data = validate_data.pop('profile')
    #     profile = instance.profile

    #     instance.email = validate_data.get('email', instance.email)
    #     instance.save()

    #     profile.title = profile_data.get('title', profile.title)
    #     profile.dob = profile_data.get('dob', profile.dob)
    #     profile.address = profile_data.get('address', profile.address)
    #     profile.country = profile_data.get('country', profile.country)
    #     profile.zip = profile_data.get('zip', profile.zip)
    #     profile.photo = profile_data.get('photo', profile.photo)
    #     profile.save()
